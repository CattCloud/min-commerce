import ProductList from './components/ProductList';
import { products } from './data/products'; 

function App() {

  return (
    <div className="bg-bg-app min-h-screen">
      <header className="py-6 px-8 text-center  mb-4">
        <h1 className="text-text-primary text-5xl font-extrabold tracking-wider">
          <span className="text-primary-300">Min</span>-Commerce
        </h1>
      </header>
      
      <main className="container mx-auto max-w-7xl">
        <ProductList products={products} />
      </main>
    </div>
  )
}

export default App
