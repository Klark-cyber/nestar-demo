import { useRouter } from "next/router";

const PropertyDetail = () => {
  const router = useRouter();
  const { productId } = router.query; // 'propertyId' deb yozilgan

  return <div>PROPERTY DETAIL {productId}</div>;
};

export default PropertyDetail;
