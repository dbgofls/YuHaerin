import React, { useState, useEffect } from 'react';
import './Gallery.css';

const images = [
    { id: 1, src: '/myworks/스마트 화분 판넬.png', title: 'Smart Pot Panel', lessons: 'New Project' },
    { id: 2, src: '/myworks/컬러 배경 스크립트.png', title: 'Color Background Script', lessons: 'New Project' },
    { id: 3, src: '/myworks/컨텐츠 분석.png', title: 'Content Analysis', lessons: 'New Project' },
    { id: 4, src: '/myworks/컴그 3d 수업진도 6.png', title: '3D Class Progress', lessons: 'New Project' },
    { id: 5, src: '/myworks/패션쇼 포스터 3.png', title: 'Fashion Show Poster', lessons: 'New Project' },
    { id: 6, src: '/myworks/탬플릿 1.png', title: 'Template Design 1', lessons: 'New Project' },
    { id: 7, src: '/myworks/탬플릿 2.png', title: 'Template Design 2', lessons: 'New Project' },
    { id: 8, src: '/myworks/Game Controller 모델링.png', title: 'Game Controller Modeling', lessons: 'New Project' },
    { id: 9, src: '/myworks/수박 인포그래픽.png', title: 'Watermelon Infographic', lessons: 'New Project' },
    { id: 10, src: '/myworks/에어프라이기 판넬.jpg', title: 'Air Fryer Panel', lessons: 'New Project' },
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
                    <h2 className="section-title">SELECT LEVEL</h2>
                </div>

                <div className="gallery__grid">
                    {images.map((image) => (
                        <div key={image.id} className="card">
                            <div className="card__image-container">
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
                    <button className="btn-black">LOAD MORE LEVELS ...</button>
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
