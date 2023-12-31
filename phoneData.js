//Note: Screen sizes are strings and not floats since
//JS automatically converts items in the screenSizePreferences
//array to strings

let phones = [
      {
        "name": "Apple iPhone 14 Pro",
        "brand": "Apple",
        "price": 1899,
        "screenSize": '6.1',
        "batteryLife": "long",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/596668-Product-0-I-637982210245803771_ed38c5fa-d9e3-443f-9637-5a570d9b829d_467x.jpg?v=1686263407",
        "specifications": "https://www.gsmarena.com/apple_iphone_14_pro-11860.php"
      },
      {
        "name": "Apple iPhone 13 Pro",
        "brand": "Apple",
        "price": 2369,
        "screenSize": '6.1',
        "batteryLife": "moderate",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/530300-Product-0-I-637672995149033709_44db1332-162a-45c5-ac37-143d7b2edc4a_467x.jpg?v=1686263249",
        "specifications": "https://www.gsmarena.com/apple_iphone_13_pro-11102.php"
      },
      {
        "name": "Apple iPhone 13",
        "brand": "Apple",
        "price": 1229,
        "screenSize": '6.1',
        "batteryLife": "moderate",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": false,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/530252-Product-0-I-637672977748868980_4ab678a3-b91a-453a-8070-312155613147_467x.jpg?v=1686263299",
        "specifications": "https://www.gsmarena.com/apple_iphone_13-11103.php"
      },
      {
        "name": "Apple iPhone 13 Mini",
        "brand": "Apple",
        "price": 1047,
        "screenSize": '5.4',
        "batteryLife": "moderate",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": false,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "Assets/iPhone13Mini.png",
        "specifications": "https://www.gsmarena.com/apple_iphone_13-11103.php"
      },
      {
        "name": "Apple iPhone 14 Pro Max",
        "brand": "Apple",
        "price": 1899,
        "screenSize": '6.7',
        "batteryLife": "long",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/596685-Product-0-I-637982215040436891_9ab62d41-177d-4d88-9e07-4ad2d0c73e2c_467x.jpg?v=1686263290",
        "specifications": "https://www.gsmarena.com/apple_iphone_14_pro_max-11773.php"
      },
      {
        "name": "Apple iPhone 14",
        "brand": "Apple",
        "price": 1399,
        "screenSize": '6.1',
        "batteryLife": "moderate",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": false,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/596634-Product-0-I-637982174240799602_1b4d3a28-adb5-4818-b51d-7ae82b551206_467x.jpg?v=1686263293",
        "specifications": "https://www.gsmarena.com/apple_iphone_14-11861.php"
      },
      {
        "name": "Apple iPhone 14 Plus",
        "brand": "Apple",
        "price": 1579,
        "screenSize": '6.7',
        "batteryLife": "long",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": false,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/596653-Product-0-I-637982188645613786_467x.jpg?v=1686263294",
        "specifications": "https://www.gsmarena.com/apple_iphone_14_plus-11862.php"
      },
      {
        "name": "Apple iPhone SE 3rd Gen",
        "brand": "Apple",
        "price": 719,
        "screenSize": '4.7',
        "batteryLife": "short",
        "performance": "high",
        "camera": "medium",
        "HighRefreshRate": false,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/580973-Product-0-I-637824072777657565_8c877594-a29e-4864-b711-ddd32f8449ce_467x.jpg?v=1686263275",
        "specifications": "https://www.gsmarena.com/apple_iphone_se_(2022)-11410.php"
      },
      {
        "name": "Apple iPhone 12 ",
        "brand": "Apple",
        "price": 1049,
        "screenSize": '6.1',
        "batteryLife": "moderate",
        "performance": "medium",
        "camera": "medium",
        "HighRefreshRate": false,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/481745-Product-0-I-637382639038707975_4335ae0c-b5d9-4b77-8952-5b46eb4a8196_467x.jpg?v=1686263278",
        "specifications": "https://www.gsmarena.com/apple_iphone_12-10509.php"
      },
      {
        "name": "Samsung Galaxy S23+ 5G",
        "brand": "Samsung",
        "price": 1399,
        "screenSize": '6.6',
        "batteryLife": "long",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/622153-Product-1-I-638211677455285290_467x.jpg?v=1686794338",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_s23+-12083.php"
      },
      {
        "name": "Samsung Galaxy S23 Ultra 5G",
        "brand": "Samsung",
        "price": 1649,
        "screenSize": '6.8',
        "batteryLife": "long",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/622162-Product-1-I-638211725438752222_6a645ae8-9fcd-46af-a4b4-0a1e2cb2797a_467x.jpg?v=1686794405",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_s23_ultra-12024.php"
      },
      {
        "name": "Samsung Galaxy S22+ 5G",
        "brand": "Samsung",
        "price": 1549,
        "screenSize": '6.6',
        "batteryLife": "moderate",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/580956-Product-0-I-637783545159558450_fc1fe028-1023-47e9-81d8-25c99dd47a31_467x.jpg?v=1662345712",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_s22+_5g-11252.php"
      },
      {
        "name": "Samsung Galaxy S22 Ultra 5G",
        "brand": "Samsung",
        "price": 1799,
        "screenSize": '6.8',
        "batteryLife": "long",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/580961-Product-0-I-637783567359855405_b886127d-2e55-4b4e-96a7-272fdbc7702c_467x.jpg?v=1662345708",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_s22_ultra_5g-11251.php"
      },
      {
        "name": "Samsung Galaxy S21 FE 5G",
        "brand": "Samsung",
        "price": 1049,
        "screenSize": '6.4',
        "batteryLife": "moderate",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/578714-Product-0-I-637770572559018267_467x.jpg?v=1668470143",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_s21_fe_5g-10954.php"
      },
      {
        "name": "Samsung Galaxy Z Fold 4 5G",
        "brand": "Samsung",
        "price": 2699,
        "screenSize": '7.5',
        "batteryLife": "long",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/616698-Product-0-I-638034193040726977_467x.jpg?v=1684817364",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_z_fold4-11737.php"
      },
      {
        "name": "Samsung Galaxy A54 5G",
        "brand": "Samsung",
        "price": 599,
        "screenSize": '6.4',
        "batteryLife": "long",
        "performance": "medium",
        "camera": "medium",
        "HighRefreshRate": true,
        "WirelessCharging": false,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/629196-Product-0-I-638161968798680401_467x.jpg?v=1680564152",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_a54-12070.php"
      },
      {
        "name": "Samsung Galaxy S22 5G",
        "brand": "Samsung",
        "price": 1149,
        "screenSize": '6.1',
        "batteryLife": "moderate",
        "performance": "high",
        "camera": "medium",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/580945-Product-0-I-637782961358871995_467x.jpg?v=1662345313",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_s22_5g-11253.php"
      },
      {
        "name": "Samsung Galaxy A34 5G",
        "brand": "Samsung",
        "price": 599,
        "screenSize": '6.6',
        "batteryLife": "long",
        "performance": "medium",
        "camera": "medium",
        "HighRefreshRate": true,
        "WirelessCharging": false,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/629194-Product-0-I-638161966398815619_467x.jpg?v=1680563912",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_a34-12074.php"
      },
      {
        "name": "Samsung Galaxy Z Flip 4 5G",
        "brand": "Samsung",
        "price": 1849,
        "screenSize": '4.5',
        "batteryLife": "moderate",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/598445-Product-0-I-637947047614673572_467x.jpg?v=1685339964",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_z_flip4-11538.php"
      },
      {
        "name": "Samsung Galaxy Z Flip 3 5G",
        "brand": "Samsung",
        "price": 999,
        "screenSize": '4.5',
        "batteryLife": "moderate",
        "performance": "high",
        "camera": "medium",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/555325-Product-0-I-637707641193166611_a9f937cd-01a7-485c-9c75-eca34eed310b_467x.jpg?v=1662003038",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_z_flip3_5g-11044.php"
      },
      {
        "name": "Google Pixel 7",
        "brand": "Google",
        "price": 999,
        "screenSize": '6.3',
        "batteryLife": "moderate",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/601375-Product-0-I-637987418845546004_b6dcd6c1-5dc9-4e57-823f-b03bdfb11690_467x.jpg?v=1684723404",
        "specifications": "https://www.gsmarena.com/google_pixel_7-11903.php"
      },
      {
        "name": "Google Pixel 7 Pro 5G",
        "brand": "Google",
        "price": 1299,
        "screenSize": '6.7',
        "batteryLife": "moderate",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/601380-Product-0-I-638007124067246147_f29ef098-f8fa-432b-a2f3-4e5aeeb10084_467x.jpg?v=1682990547",
        "specifications": "https://www.gsmarena.com/google_pixel_7_pro-11908.php"
      },
      {
        "name": "Samsung Galaxy A53 5G",
        "brand": "Samsung",
        "price": 549,
        "screenSize": '6.5',
        "batteryLife": "long",
        "performance": "medium",
        "camera": "low",
        "HighRefreshRate": true,
        "WirelessCharging": false,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/586036-Product-0-I-637843402378925519_467x.jpg?v=1668469734",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_a53_5g-11268.php"
      },
      {
        "name": "Samsung Galaxy S23 5G",
        "brand": "Samsung",
        "price": 1149,
        "screenSize": '6.1',
        "batteryLife": "long",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/622141-Product-1-I-638211658211642182_467x.jpg?v=1686794286",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_s23-12082.php"
      },
      {
        "name": "Google Pixel 7a",
        "brand": "Google",
        "price": 749,
        "screenSize": '6.1',
        "batteryLife": "moderate",
        "performance": "medium",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/635802-Product-0-I-638186827806359096_467x.jpg?v=1683696904",
        "specifications": "https://www.gsmarena.com/google_pixel_7a-12170.php"
      },
      {
        "name": "Oppo Find X5 Pro",
        "brand": "Oppo",
        "price": 1399,
        "screenSize": '6.7',
        "batteryLife": "long",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/622640-Product-0-I-638133387198850669_09b1e80a-7501-4f20-aa50-1d7e5289a1d8_467x.jpg?v=1678187577",
        "specifications": "https://www.gsmarena.com/oppo_find_x5_pro-11236.php"
      },
      {
        "name": "Samsung Galaxy A33 5G",
        "brand": "Samsung",
        "price": 499,
        "screenSize": '6.4',
        "batteryLife": "long",
        "performance": "low",
        "camera": "medium",
        "HighRefreshRate": true,
        "WirelessCharging": false,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/586034-Product-0-I-637831939978164233_e221e36c-cf71-4dd1-8ade-938f9262813f_467x.jpg?v=1668469792",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_a33_5g-11429.php"
      },
      {
        "name": "Oppo A96",
        "brand": "Oppo",
        "price": 399,
        "screenSize": '6.6',
        "batteryLife": "long",
        "performance": "medium",
        "camera": "medium",
        "HighRefreshRate": true,
        "WirelessCharging": false,
        "5GConnectivity": false,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/588580-Product-0-I-637846788210684258_467x.jpg?v=1660690577",
        "specifications": "https://www.gsmarena.com/oppo_a96-11434.php"
      },
      {
        "name": "Google Pixel 6 Pro 5G",
        "brand": "Google",
        "price": 779,
        "screenSize": '6.7',
        "batteryLife": "moderate",
        "performance": "high",
        "camera": "high",
        "HighRefreshRate": true,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/536316-Product-0-I-637693026511109033_467x.jpg?v=1668469746",
        "specifications": "https://www.gsmarena.com/google_pixel_6_pro-10918.php"
      },
      {
        "name": "OPPO Reno 8 Lite 5G",
        "brand": "Oppo",
        "price": 599,
        "screenSize": '6.4',
        "batteryLife": "long",
        "performance": "medium",
        "camera": "medium",
        "HighRefreshRate": false,
        "WirelessCharging": false,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/590590-Product-0-I-637902091977216909_99963f15-25a0-46f7-85fe-8bbc5052168a_467x.jpg?v=1660690579",
        "specifications": "https://www.gsmarena.com/oppo_reno8_lite-11513.php"
      },
      {
        "name": "Samsung Galaxy A13",
        "brand": "Samsung",
        "price": 279,
        "screenSize": '6.6',
        "batteryLife": "long",
        "performance": "low",
        "camera": "low",
        "HighRefreshRate": false,
        "WirelessCharging": false,
        "5GConnectivity": false,
        "WaterResistance": false,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/586031-Product-0-I-637831936378312994_3c2a4b99-3944-4333-95fa-ffc18c974386_467x.jpg?v=1668469768",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_a13-11402.php"
      },
      {
        "name": "Google Pixel 6a 5G",
        "brand": "Google",
        "price": 599,
        "screenSize": '6.1',
        "batteryLife": "long",
        "performance": "medium",
        "camera": "high",
        "HighRefreshRate": false,
        "WirelessCharging": false,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/593600-Product-0-I-637920187377224808_a24d39ca-d481-4455-8cd6-decc54fb151b_467x.jpg?v=1676944790",
        "specifications": "https://www.gsmarena.com/google_pixel_6a-11229.php"
      },
      {
        "name": "Nokia X20 5G",
        "brand": "Nokia",
        "price": 349,
        "screenSize": '6.7',
        "batteryLife": "moderate",
        "performance": "low",
        "camera": "low",
        "HighRefreshRate": false,
        "WirelessCharging": false,
        "5GConnectivity": true,
        "WaterResistance": false,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/521635-Product-0-I-637570202491673303_467x.jpg?v=1621392189",
        "specifications": "https://www.gsmarena.com/nokia_x20-10838.php"
      },
      {
        "name": "Nokia XR20 5G",
        "brand": "Nokia",
        "price": 699,
        "screenSize": '6.7',
        "batteryLife": "long",
        "performance": "medium",
        "camera": "medium",
        "HighRefreshRate": false,
        "WirelessCharging": true,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/529294-Product-0-I-637631650103986041_467x.jpg?v=1627609939",
        "specifications": "https://www.gsmarena.com/nokia_xr20-11013.php"
      },
      {
        "name": "OPPO Find X5 Lite",
        "brand": "Oppo",
        "price": 599,
        "screenSize": '6.4',
        "batteryLife": "long",
        "performance": "high",
        "camera": "medium",
        "HighRefreshRate": true,
        "WirelessCharging": false,
        "5GConnectivity": true,
        "WaterResistance": false,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/584381-Product-0-I-637820013177736636_c7f642dd-7d4b-4a72-8728-ace1bb3fce65_467x.jpg?v=1660689715",
        "specifications": "https://www.gsmarena.com/oppo_find_x5_lite-11323.php"
      },
      {
        "name": "Asus ROG Phone 6 5G",
        "brand": "Other",
        "price": 1599,
        "screenSize": '6.8',
        "batteryLife": "long",
        "performance": "high",
        "camera": "medium",
        "HighRefreshRate": true,
        "WirelessCharging": false,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/598341-Product-0-I-637953050618247843_467x.jpg?v=1659672352",
        "specifications": "https://www.gsmarena.com/asus_rog_phone_6-11647.php"
      },
      {
        "name": "Motorola g82 5G",
        "brand": "Other",
        "price": 499,
        "screenSize": '6.6',
        "batteryLife": "long",
        "performance": "medium",
        "camera": "medium",
        "HighRefreshRate": true,
        "WirelessCharging": false,
        "5GConnectivity": true,
        "WaterResistance": false,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/594111-Product-0-I-637902018177351554_467x.jpg?v=1656631971",
        "specifications": "https://www.gsmarena.com/motorola_moto_g82-11508.php"
      },
      {
        "name": "Motorola Razr 2022 5G",
        "brand": "Other",
        "price": 999,
        "screenSize": '4.5',
        "batteryLife": "short",
        "performance": "high",
        "camera": "medium",
        "HighRefreshRate": true,
        "WirelessCharging": false,
        "5GConnectivity": true,
        "WaterResistance": false,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/611250-Product-0-I-638030681240561259_b3aa08ee-e610-4215-82bc-bc0f71f57b5f_467x.jpg?v=1667444933",
        "specifications": "https://www.gsmarena.com/motorola_razr_2022-11752.php"
      },
      {
        "name": "Asus Zenfone 9 5G",
        "brand": "Other",
        "price": 1199,
        "screenSize": '5.9',
        "batteryLife": "long",
        "performance": "high",
        "camera": "medium",
        "HighRefreshRate": true,
        "WirelessCharging": false,
        "5GConnectivity": true,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/609014-Product-0-I-638007538073809057_467x.jpg?v=1665117479",
        "specifications": "https://www.gsmarena.com/asus_zenfone_9-11656.php"
      },
      {
        "name": "Motorola g62 5G",
        "brand": "Other",
        "price": 399,
        "screenSize": '6.5',
        "batteryLife": "long",
        "performance": "high",
        "camera": "low",
        "HighRefreshRate": true,
        "WirelessCharging": false,
        "5GConnectivity": true,
        "WaterResistance": false,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/594120-Product-0-I-637926279777558940_73e7988a-410e-41b1-bbdb-03c91bc3e3f6_467x.jpg?v=1656996889",
        "specifications": "https://www.gsmarena.com/motorola_moto_g62_5g-11602.php"
      },
      {
        "name": "Nokia C32",
        "brand": "Nokia",
        "price": 249,
        "screenSize": '6.5',
        "batteryLife": "long",
        "performance": "low",
        "camera": "low",
        "HighRefreshRate": false,
        "WirelessCharging": false,
        "5GConnectivity": false,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/652262-Product-0-I-638203279815802266_467x.jpg?v=1684731256",
        "specifications": "https://www.gsmarena.com/nokia_c32-12139.php"
      },
      {
        "name": "OPPO A17",
        "brand": "Oppo",
        "price": 259,
        "screenSize": '6.6',
        "batteryLife": "long",
        "performance": "low",
        "camera": "low",
        "HighRefreshRate": false,
        "WirelessCharging": false,
        "5GConnectivity": false,
        "WaterResistance": true,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/622138-Product-0-I-638090421440631404_467x.jpg?v=1673405789",
        "specifications": "https://www.gsmarena.com/oppo_a17-11902.php"
      },
      {
        "name": "Nokia G21",
        "brand": "Nokia",
        "price": 249,
        "screenSize": '6.5',
        "batteryLife": "long",
        "performance": "low",
        "camera": "low",
        "HighRefreshRate": false,
        "WirelessCharging": false,
        "5GConnectivity": false,
        "WaterResistance": false,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/583346-Product-0-I-637812287980625535_467x.jpg?v=1645592462",
        "specifications": "https://www.gsmarena.com/nokia_g21-11356.php"
      },
      {
        "name": "Samsung Galaxy A04S",
        "brand": "Samsung",
        "price": 329,
        "screenSize": '6.5',
        "batteryLife": "long",
        "performance": "low",
        "camera": "medium",
        "HighRefreshRate": true,
        "WirelessCharging": false,
        "5GConnectivity": false,
        "WaterResistance": false,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/629191-Product-0-I-638161960400491081_467x.jpg?v=1680563310",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_a04s-11803.php"
      },
      {
        "name": "OPPO A78",
        "brand": "Oppo",
        "price": 359,
        "screenSize": '6.6',
        "batteryLife": "long",
        "performance": "low",
        "camera": "low",
        "HighRefreshRate": true,
        "WirelessCharging": false,
        "5GConnectivity": true,
        "WaterResistance": false,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/628970-Product-0-I-638150889204008828_467x.jpg?v=1679986353",
        "specifications": "https://www.gsmarena.com/oppo_a78-12073.php"
      },
      {
        "name": "Samsung Galaxy A14 5G",
        "brand": "Samsung",
        "price": 379,
        "screenSize": '6.6',
        "batteryLife": "long",
        "performance": "low",
        "camera": "medium",
        "HighRefreshRate": true,
        "WirelessCharging": false,
        "5GConnectivity": true,
        "WaterResistance": false,
        "image": "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/629193-Product-0-I-638161964599882691_467x.jpg?v=1680563730",
        "specifications": "https://www.gsmarena.com/samsung_galaxy_a14_5g-12004.php"
      }
    ]