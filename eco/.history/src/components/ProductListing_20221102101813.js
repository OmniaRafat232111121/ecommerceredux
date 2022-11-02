
const ProductListing = () => {
const products=useSelector((state)=>state.allProducts.products)
const dispatch=useDispatch();
const fetchProducts=async()=>{
    const response=await axios 
    .get("https://dummyjson.com/products")
    .catch((err)=>{
      console.log('Err:',err)
    })
    dispatch(setProducts(response.data))
  }
  useEffect(() => {
    fetchProducts();
  }, [])
  console.log('Products:',products)
  return (
    <div className='container grid grid-cols-3'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing
