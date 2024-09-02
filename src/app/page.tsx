"use client";

import { Stack, Typography } from "@mui/material";
import React from "react";
import ItemCart from "./item-cart";
import styles from "./page.module.css";  // นำเข้าไฟล์ CSS

export default function Home() {
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleIncremental = (price: number) => {
    setTotalPrice((prevTotal) => prevTotal + price);
  };

  const handleDecremental = (price: number) => {
    setTotalPrice((prevTotal) => (prevTotal > 0 ? prevTotal - price : 0));
  };

  const myItems = [
    { itemname: "iPhone 15 Pro", price: 41999, imageUrl: "https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review-1024x691.jpg" },
    { itemname: "iPhone 15", price: 33900, imageUrl: "https://www.istudio.store/cdn/shop/files/TH_iPhone_15_Blue_PDP_Image_Position-1A_Blue_Color.jpg?v=1707277872" },
    { itemname: "iPad Pro", price: 39999, imageUrl: "https://www.apple.com/v/ipad-pro/ag/images/meta/ipad-pro_specs__bnuyb5pohkly_og.png" },
    { itemname: "iPad Air", price: 23900, imageUrl: "https://www.apple.com/newsroom/images/product/ipad/standard/apple_new-ipad-air_sky-blue_09152020_carousel.jpg.large.jpg" },
    { itemname: "iPad", price: 13900, imageUrl: "https://www.apple.com/newsroom/images/product/ipad/standard/Apple-iPad-10th-gen-blue-2up-221018_big.jpg.large.jpg" },
    { itemname: "iPad mini", price: 19900, imageUrl: "https://www.apple.com/newsroom/images/product/ipad/standard/Apple_iPad-mini_colors_09142021_big_carousel.jpg.slideshow-xlarge_2x.jpg" },
    { itemname: "MacBook Air", price: 34900, imageUrl: "https://www.apple.com/newsroom/images/tile-images/Apple_new-macbook-air-wallpaper-screen_03182020.jpg.og.jpg?202408130326" },
    { itemname: "MacBook Pro", price: 59900, imageUrl: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_16-inch-Screen_10182021_big_carousel.jpg.large.jpg" },
    { itemname: "iMac", price: 50000, imageUrl: "https://www.apple.com/newsroom/images/product/mac/standard/Apple-iMac-gets-2x-more-performance-03192019_big.jpg.large.jpg" },
    { itemname: "Mac mini", price: 21900, imageUrl: "https://cdn.mos.cms.futurecdn.net/a89992626a0bf98e5f9030af8584b26e.jpg" },
    { itemname: "Mac Studio", price: 74900, imageUrl: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-studio-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684345161143" },
    // ...เพิ่มรายการสินค้าอื่น ๆ พร้อมกับ imageUrl
  ];

  return (
    <div className={styles.shoppingCart}>
      <h1 className={styles.heading}>Shopping Cart</h1>
      {myItems &&
        myItems.map((item) => (
          <ItemCart
            key={item.itemname}
            itemname={item.itemname}
            itemPrice={item.price}
            imageUrl={item.imageUrl}
            handleIncremental={handleIncremental}
            handleDecremental={handleDecremental}
          />
        ))}
      <Stack direction="row" spacing={2} className={styles.totalPrice}>
        <Typography variant="h4">Total Price of Your Order</Typography>
        <Typography variant="h4">{totalPrice.toLocaleString()} Thb</Typography>
      </Stack>
    </div>
  );
}
