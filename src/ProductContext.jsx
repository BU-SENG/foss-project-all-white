import React, { createContext, useState, useContext, useEffect } from "react";
import { supabase } from "./supabaseClient";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // ---------------------------------------------
  // AUTO ITEMS FOR DIFFERENT CATEGORIES
  // ---------------------------------------------
  const autoItems = [
    // ------------------ ELECTRONICS ------------------
    {
      id: "auto-electronics-1",
      title: "Sony WH-1000XM4 Headphones",
      category: "Electronics",
      price: "₦120,000",
      image_url:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be3c",
      status: "Active",
      condition: "Used - Good",
      hall: "Campus Store",
      seller_name: "Auto Generated",
      description: "Noise cancelling wireless headphones.",
      time: "Now",
    },
    {
      id: "auto-electronics-2",
      title: "HP Pavilion Laptop",
      category: "Electronics",
      price: "₦210,000",
      image_url:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      status: "Active",
      condition: "Used - Fair",
      hall: "Engineering Block",
      seller_name: "Auto Generated",
      description: "Core i5, 8GB RAM, 512GB SSD laptop.",
      time: "Now",
    },

    // ------------------ FURNITURE ------------------
    {
      id: "auto-furniture-1",
      title: "Study Desk",
      category: "Furniture",
      price: "₦35,000",
      image_url:
        "https://images.unsplash.com/photo-1598300057924-eca5f0a9ae1b",
      status: "Active",
      condition: "Like New",
      hall: "Hall 3",
      seller_name: "Auto Generated",
      description: "Wooden study table, very durable.",
      time: "Now",
    },
    {
      id: "auto-furniture-2",
      title: "Office Chair",
      category: "Furniture",
      price: "₦18,000",
      image_url:
        "https://images.unsplash.com/photo-1586165368502-1bad197a0f48",
      status: "Active",
      condition: "Used - Good",
      hall: "Hall 5",
      seller_name: "Auto Generated",
      description: "Ergonomic office chair, adjustable height.",
      time: "Now",
    },

    // ------------------ CLOTHING ------------------
    {
      id: "auto-clothing-1",
      title: "Hoodie (Black)",
      category: "Clothing",
      price: "₦8,000",
      image_url:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
      status: "Active",
      condition: "New",
      hall: "Hall 1",
      seller_name: "Auto Generated",
      description: "Unisex soft cotton hoodie.",
      time: "Now",
    },
    {
      id: "auto-clothing-2",
      title: "Nike Sneakers",
      category: "Clothing",
      price: "₦25,000",
      image_url:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      status: "Active",
      condition: "Used - Good",
      hall: "Hall 6",
      seller_name: "Auto Generated",
      description: "Nike running shoes, size 43.",
      time: "Now",
    },

    // ------------------ SPORTS ------------------
    {
      id: "auto-sports-1",
      title: "Adidas Football",
      category: "Sports",
      price: "₦9,500",
      image_url:
        "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d",
      status: "Active",
      condition: "Used - Good",
      hall: "Sports Complex",
      seller_name: "Auto Generated",
      description: "FIFA-size quality football.",
      time: "Now",
    },
    {
      id: "auto-sports-2",
      title: "Gym Dumbbells (Pair)",
      category: "Sports",
      price: "₦14,000",
      image_url:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07b",
      status: "Active",
      condition: "Like New",
      hall: "Gym Center",
      seller_name: "Auto Generated",
      description: "10kg dumbbells, rubber coated.",
      time: "Now",
    },

    // ------------------ DORM ESSENTIALS ------------------
    {
      id: "auto-dorm-1",
      title: "Electric Kettle",
      category: "Dorm Essentials",
      price: "₦7,000",
      image_url:
        "https://images.unsplash.com/photo-1586201375761-83865001e31b",
      status: "Active",
      condition: "New",
      hall: "Hall 7",
      seller_name: "Auto Generated",
      description: "Stainless steel, 2-litre kettle.",
      time: "Now",
    },
    {
      id: "auto-dorm-2",
      title: "Mattress (Student Size)",
      category: "Dorm Essentials",
      price: "₦22,000",
      image_url:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
      status: "Active",
      condition: "Used - Good",
      hall: "Hall 2",
      seller_name: "Auto Generated",
      description: "Soft foam mattress, very comfortable.",
      time: "Now",
    },
  ];

  // ---------------------------------------------
  // GOOGLE BOOKS API FOR BOOKS CATEGORY
  // ---------------------------------------------
  const fetchBooks = async () => {
    try {
      const res = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=university+textbooks"
      );
      const data = await res.json();

      if (!data.items) return [];

      return data.items.map((book, i) => ({
        id: `google-book-${i}`,
        title: book.volumeInfo.title || "Untitled Book",
        category: "Books",
        price: "₦0 (Free Info)",
        image_url: book.volumeInfo.imageLinks?.thumbnail || "",
        status: "Active",
        condition: "New",
        hall: "Library",
        seller_name: "Google Books",
        description: book.volumeInfo.description || "No description available.",
        time: "Now",
      }));
    } catch (error) {
      console.error("Google Books Error:", error);
      return [];
    }
  };

  // ---------------------------------------------
  // FETCH SUPABASE LISTINGS
  // ---------------------------------------------
  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("listings")
      .select(
        "*, seller_id, seller_name, image_url, price, title, status, category, condition, hall, description, created_at"
      )
      .order("created_at", { ascending: false });

    let supabaseItems = [];

    if (data && !error) {
      supabaseItems = data.map((item) => ({
        ...item,
        id: Number(item.id),
      }));
    }

    // Merge Supabase + Google Books + Auto Items
    const books = await fetchBooks();

    setProducts([...supabaseItems, ...books, ...autoItems]);
  };

  // ---------------------------------------------
  // REALTIME LISTENER FOR SUPABASE
  // ---------------------------------------------
  useEffect(() => {
    fetchProducts();

    const subscription = supabase
      .channel("public:listings")
      .on("postgres_changes", { event: "*", table: "listings" }, () =>
        fetchProducts()
      )
      .subscribe();

    return () => supabase.removeChannel(subscription);
  }, []);

  // ---------------------------------------------
  // ADD PRODUCT
  // ---------------------------------------------
  const addProduct = async (newItem) => {
    const itemToInsert = { ...newItem, id: undefined };

    const { data, error } = await supabase
      .from("listings")
      .insert(itemToInsert)
      .select();

    if (error) throw error;
    return data;
  };

  // ---------------------------------------------
  // TOGGLE STATUS
  // ---------------------------------------------
  const toggleProductStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Sold" : "Active";

    await supabase.from("listings").update({ status: newStatus }).eq("id", id);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        toggleProductStatus,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
