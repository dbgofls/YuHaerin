import React, { useState, useEffect } from 'react';
import './Gallery.css';

const images = [
    { id: 1, src: '/YuHaerin/myworks/스마트 화분 판넬.png', title: 'Smart Pot Panel', lessons: 'New Project' },
    { id: 2, src: '/YuHaerin/myworks/수박 인포그래픽.png', title: 'Watermelon Infographic', lessons: 'New Project' },
    { id: 3, src: '/YuHaerin/myworks/에어프라이기 판넬.jpg', title: 'Air Fryer Panel', lessons: 'New Project' },
    { id: 4, src: '/YuHaerin/myworks/마사지기 판넬.png', title: 'Massage Machine Panel', lessons: 'New Project' },
    { id: 5, src: '/YuHaerin/myworks/패션쇼 포스터 3.png', title: 'Fashion Show Poster', lessons: 'New Project' },
    { id: 6, src: '/YuHaerin/myworks/탬플릿 1.png', title: 'Template Design 1', lessons: 'New Project' },
    { id: 7, src: '/YuHaerin/myworks/탬플릿 2.png', title: 'Template Design 2', lessons: 'New Project' },
    { id: 8, src: '/YuHaerin/myworks/명함.png', title: 'Business Card Design', lessons: 'New Project' },
    { id: 9, src: '/YuHaerin/myworks/컨텐츠 분석.png', title: 'Content Analysis', lessons: 'New Project' },
    { id: 10, src: '/YuHaerin/myworks/컬러 배경 스크립트.png', title: 'Color Background Script', lessons: 'New Project' },
    { id: 11, src: '/YuHaerin/myworks/tom_lucitor_variation.jpg', title: 'Color Variation', lessons: 'New Project' },
    { id: 12, src: '/YuHaerin/myworks/tom_lucitor_renewal.jpg', title: 'Color Renewal Proposal', lessons: 'New Project' },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedImage]);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section id="myworks" className="gallery">
            <div className="container">
                <div className="gallery__header">
                    <h2 className="section-title">SELECT WORKS</h2>
                </div>

                <div className="gallery__grid">
                    {images.map((image) => (
                        <div key={image.id} className="card">
                            <div className="card__image-container" onClick={() => openModal(image)} style={{ cursor: 'pointer' }}>
                                <img src={image.src} alt={image.title} loading="lazy" />
                            </div>
                            <div className="card__content">
                                <span className="card__meta">WORLD 1-{image.id}</span>
                                <h3 className="card__title">{image.title}</h3>
                                <button
                                    className="card__btn"
                                    aria-label="View details"
                                    onClick={() => openModal(image)}
                                >
                                    PLAY ►
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gallery__footer">
                    <button className="btn-black">SELECT YOUR WORK ▲</button>
                </div>
            </div>

            {selectedImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <img src={selectedImage.src} alt={selectedImage.title} />
                        <div className="modal-info">
                            <h3>{selectedImage.title}</h3>
                            <p>{selectedImage.lessons}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
