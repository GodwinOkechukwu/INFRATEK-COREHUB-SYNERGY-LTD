"use client";
import React, { useEffect, useState, useCallback } from "react";
import { WooCommerce, useCategories } from "@src/components/lib/woocommerce";
import NewArrivalCard from "../Cards/NewArrivalCard";

// ── Types ──────────────────────────────────────────────
interface CategoryTab {
  id: number | "all";
  name: string;
}

// ── Skeleton loader ─────────────────────────────────────
const SkeletonGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="rounded-2xl overflow-hidden bg-[#1a1a1a] animate-pulse"
      >
        <div className="aspect-square bg-[#252525]" />
        <div className="p-4 space-y-3 bg-[#111]">
          <div className="h-4 bg-[#252525] rounded w-3/4" />
          <div className="flex items-center justify-between">
            <div className="h-6 bg-[#252525] rounded w-1/3" />
            <div className="h-8 bg-[#252525] rounded w-16" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

// ── Main component ──────────────────────────────────────
export default function NewArrivals() {
  const [activeTab, setActiveTab] = useState<number | "all">("all");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const PER_PAGE = 6;

  // Fetch categories for tabs
  const { data: categoriesRaw } = useCategories("");
  const categories: CategoryType[] = categoriesRaw || [];

  const tabs: CategoryTab[] = [
    { id: "all", name: "All Products" },
    ...categories
      .filter((c: CategoryType) => c.count > 0)
      .slice(0, 6)
      .map((c: CategoryType) => ({ id: c.id, name: c.name })),
  ];

  // Fetch products by tab
  const fetchProducts = useCallback(
    async (tab: number | "all", pageNum: number, append = false) => {
      try {
        if (pageNum === 1) setIsLoading(true);
        else setLoadingMore(true);

        const categoryParam = tab === "all" ? "" : `&category=${tab}`;
        const response = await WooCommerce.get(
          `products?orderby=date&order=desc&per_page=${PER_PAGE}&page=${pageNum}${categoryParam}`,
        );

        const fetched: ProductType[] = response?.data || [];
        setProducts((prev) => (append ? [...prev, ...fetched] : fetched));
        setHasMore(fetched.length === PER_PAGE);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setIsLoading(false);
        setLoadingMore(false);
      }
    },
    [],
  );

  // On tab change
  useEffect(() => {
    setPage(1);
    setProducts([]);
    fetchProducts(activeTab, 1, false);
  }, [activeTab, fetchProducts]);

  // On "View More"
  const handleViewMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProducts(activeTab, nextPage, true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
        {/* ── Header ── */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
            New Arrivals
          </h1>
          <p className="text-[#888] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Fresh drops and the latest in hardware — explore our newest products
            across every category.
          </p>
        </div>

        {/* ── Category Tabs ── */}
        <div className="flex items-center gap-2 flex-wrap justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                ${
                  activeTab === tab.id
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-[#888] border-[#2a2a2a] hover:border-[#444] hover:text-white"
                }
              `}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* ── Product Grid ── */}
        {isLoading ? (
          <SkeletonGrid />
        ) : products.length === 0 ? (
          <div className="text-center py-20 text-[#555]">
            <p className="text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {products.map((product: ProductType) => (
              <NewArrivalCard
                key={product.id}
                id={product.id}
                image={product.images[0]?.src}
                oldAmount={product.regular_price}
                newAmount={product.price}
                description={product.name}
                isNew={true}
              />
            ))}
          </div>
        )}

        {/* ── View More ── */}
        {!isLoading && hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleViewMore}
              disabled={loadingMore}
              className="px-10 py-3 rounded-full border border-[#2a2a2a] text-sm font-medium text-[#888] hover:border-[#444] hover:text-white transition-all duration-200 disabled:opacity-50"
            >
              {loadingMore ? "Loading..." : "View More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
