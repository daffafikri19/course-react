import { useEffect, useState } from "react";
import MainLayout from "./components/main-layout";
import { ProductType } from "./libs/types";
import { CardProduct } from "./components/card-product";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [allData, setAllData] = useState<ProductType[]>([]);
  const [filteredData, setFilteredData] = useState<ProductType[]>([]);
  const [search, setSearch] = useState<string>("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "GET",
      });
      const data: ProductType[] = await response.json();
      console.log("hasil fetch", data);

      setAllData(data); // Simpan data awal
      setFilteredData(data); // Tampilkan data awal
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    // Jika input kosong, reset ke data awal
    if (!search.trim()) {
      setFilteredData(allData);
      return;
    }

    // Filter produk berdasarkan nama
    const lowerSearch = search.toLowerCase();
    const results = allData.filter((item) =>
      item.title.toLowerCase().includes(lowerSearch)
    );

    setFilteredData(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <MainLayout className="w-full flex justify-center items-center">
      <div className="w-full flex items-center justify-center py-2 px-4">
        <input
          className="w-full py-2 px-4 rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Cari Produk"
        />
      </div>

      {loading ? (
        <div className="w-full flex items-start justify-center">Loading.....</div>
      ) : (
        <div className="grid grid-cols-3 w-full gap-4">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <CardProduct
                key={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <div className="w-full text-center col-span-3">
              Tidak ada produk ditemukan.
            </div>
          )}
        </div>
      )}
    </MainLayout>
  );
}

export default App;
