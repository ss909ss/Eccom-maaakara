import React, { useState } from 'react';
import dashboard from '../../images/dashboaard.png';
import albums from '../../images/albums.png';
import styles from './index.module.css'
import search from "../../images/searchIcon.svg";
import notifications from "../../images/notifications.svg";
import useSearch from "../../hooks/useSearch";
import { Link, useNavigate } from "react-router-dom";
import { Path } from '../../Path'
import { useAddMeatJerkMutation } from '../../services/products';


type ButtonType = 'dashboard' | 'allProducts';

const AdminCreateMeatJerks = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const { searchTerm, handleSearchChange, handleSearchSubmit } = useSearch((term) => {
    console.log('Searching for:', term);
  });
  const [activeButton, setActiveButton] = useState<ButtonType | null>(null);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [addMeatJerk] = useAddMeatJerkMutation()

  const handleButtonClick = (buttonName: ButtonType) => {
    setActiveButton(prev => prev === buttonName ? null : buttonName);
    navigate(Path.adminPanel)
  };
  const toggleCategories = () => {
    setIsCategoriesOpen(prev => !prev);
  };
  const toggleSearch = () => {
    setIsActive(!isActive); 
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file); 
    }
  };
  const handleClick = () => {
    document.getElementById("fileInput")?.click();
  };
  const handleRemoveImage = () => {
    setSelectedImage(null);
  };


  const handleAddMeatJerksClick = async () => {
    if (!selectedImage) {
      return alert('Please select an image');
    }
  
    const productName = (document.getElementById('title') as HTMLInputElement)?.value;
    const description = (document.getElementById('description') as HTMLTextAreaElement)?.value;
    const category = (document.getElementById('category') as HTMLInputElement)?.value;
    const stockQuantity = (document.getElementById('quantity') as HTMLInputElement)?.value;
    const salePrice = (document.getElementById('price') as HTMLInputElement)?.value;
  
    console.log({ productName, description, category, stockQuantity, salePrice, selectedImage }); 
  
    // Проверка на пустые поля
    if (!productName || !description || !category || !stockQuantity || !salePrice || !selectedImage) {
      return alert('All fields must be filled out, and an image must be selected');
    }
  
    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('title', productName);        
    formData.append('description', description);
    formData.append('category', category);
    formData.append('quantity', stockQuantity);    
    formData.append('price', salePrice); 
  
    try {
      const response = await addMeatJerk(formData).unwrap(); 
      console.log('Product added successfully:', response);
      navigate(Path.home); 
    } catch (error) {
      console.error('Error adding product:', error);
      alert('An error occurred while uploading the product');
    }
  };
  

  return (
    <section className={styles.productDetails}>
      <aside className={styles.leftContent}>
        <div className={styles.logoText}>
          MAKAJERKY
        </div>

        <div className={styles.globalCategories}>
          <button
            className={`${styles.globalCategory} ${activeButton === 'dashboard' ? styles.active : ''}`}
            onClick={() => handleButtonClick('dashboard')}
          >
            <img src={dashboard} alt="Dashboard" />
            Dashboard
          </button>

          <button
            className={`${styles.globalCategory} ${activeButton === 'allProducts' ? styles.active : ''}`}
            onClick={() => handleButtonClick('allProducts')}
          >
            <img src={albums} alt="All Products" />
            All products
          </button>
        </div>

        <div className={styles.meatCategories}>
          <div className={styles.openCategories} onClick={toggleCategories}>
            Categories
            <span className={`${styles.arrow} ${isCategoriesOpen ? styles.up : ''}`}>
            </span>
          </div>

          {isCategoriesOpen && (
            <>
              <div className={styles.meatCategory}>
                Lorem Ipsum
                <div className={styles.quantity}>0</div>
              </div>

              <div className={styles.meatCategory}>
                Lorem Ipsum
                <div className={styles.quantity}>0</div>
              </div>

              <div className={styles.meatCategory}>
                Lorem Ipsum
                <div className={styles.quantity}>0</div>
              </div>

              <div className={styles.meatCategory}>
                Lorem Ipsum
                <div className={styles.quantity}>0</div>
              </div>

              <div className={styles.meatCategory}>
                Lorem Ipsum
                <div className={styles.quantity}>0</div>
              </div>

              <div className={styles.meatCategory}>
                Lorem Ipsum
                <div className={styles.quantity}>0</div>
              </div>
            </>
          )}
        </div>
      </aside>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <img
            src={search}
            alt="search icon"
            id="inputIcon"
            onClick={toggleSearch}
          />
          <input
            type="text"
            placeholder="search"
            className={`${styles.headerSearch} ${isActive ? styles.active : ''}`} 
            id="headerSearch"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleSearchSubmit}
          />

          <button className={styles.notificationsIcon}>
            <img src={notifications} alt="" />
          </button>

          <div className={`${styles.adminBtn} btn`}>
            Admin
            <span className={`${styles.arrow} ${isCategoriesOpen ? styles.up : ''}`}>
            </span>
          </div>
        </header>
        <div className={styles.content}>
          <div>
            <div className={styles.title}>
              All Products
            </div>

            <div className='flex'>
              <Link to={Path.home} className={styles.page}>
                Home
              </Link>
              <span className={styles.minus}>-</span>
              <Link to={Path.adminPanel} className={styles.page}>
                All Products
              </Link>
              <span className={styles.minus}>-</span>
              <Link to={Path.adminAddProduct} className={styles.page}>
                Product Details
              </Link>
            </div>
            <div className={styles.addProductJerks}>
              <div>
                <div className={styles.inputWrapperJerks}>
                  <label htmlFor="productName">Product Name</label>
                  <input
                    type="text"
                    id='title'
                    className={styles.productName}
                    name="image"
                    placeholder="MeatJerks"
                  />
                </div>

                <div className={styles.inputWrapperJerks}>
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                  />
                </div>

                <div className={styles.inputWrapperJerks}>
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    id='category'
                    className={styles.category}
                    name="category"
                    placeholder="Category(shoes)"
                  />
                </div>


                <div className={styles.inputWrapperJerks}>
                  <label htmlFor="stockQuantity">Stock Quantity</label>
                  <input
                    type="text"
                    id='quantity'
                    className={styles.stockQuantity}
                    name="stockQuantity"
                    placeholder="Stock Quantity "
                  />
                </div>

                <div className={styles.inputWrapperJerks}>
                  <label htmlFor="salePrice">Sale Price</label>
                  <input
                    type="text"
                    id='price'
                    className={styles.salePrice}
                    name="salePrice"
                    placeholder="₹450"
                  />
                </div>
              </div>
              <div className={styles.addProduct__rightContentJerks}>



                <div className={styles.containerJerks}>
                  <div onClick={handleClick} className={styles.uploadBoxJerks}>
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                    <p>Нажмите, чтобы выбрать изображение</p>
                  </div>
                  {selectedImage && (
                    <div className={styles.imageContainerJerks}>
                      <img

                        src={URL.createObjectURL(selectedImage)}
                        alt="Загруженное изображение"
                        className={styles.uploadedImageJerks}
                      />
                      <button onClick={handleRemoveImage} className={styles.removeButtonJerks}>Удалить</button>
                    </div>
                  )}
                </div>
                <div className={`${styles.buttons} flex`}>
                  <button className={`${styles.btn} btn`}>
                    Update
                  </button>

                  <button className={`${styles.btn} btn`}>
                    Delete
                  </button>

                  <button onClick={handleAddMeatJerksClick} className={`${styles.btn} btn`}>
                    Create
                  </button>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default AdminCreateMeatJerks
