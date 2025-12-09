import React, { useState } from 'react';
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
    { id: 11, src: '/myworks/design_work_02.jpg', title: 'Design Work 2', lessons: 'Inspiration' },
    { id: 12, src: '/myworks/design_work_03.jpg', title: 'Design Work 3', lessons: 'Inspiration' },
    { id: 13, src: '/myworks/design_work_04.jpg', title: 'Design Work 4', lessons: 'Inspiration' },
    { id: 14, src: '/myworks/design_work_05.jpg', title: 'Design Work 5', lessons: 'Inspiration' },
    { id: 15, src: '/myworks/design_work_06.jpg', title: 'Design Work 6', lessons: 'Inspiration' },
    { id: 16, src: '/myworks/design_work_07.jpg', title: 'Design Work 7', lessons: 'Inspiration' },
    { id: 17, src: '/myworks/design_work_08.jpg', title: 'Design Work 8', lessons: 'Inspiration' },
    { id: 18, src: '/myworks/design_work_09.jpg', title: 'Design Work 9', lessons: 'Inspiration' },
    { id: 19, src: '/myworks/design_work_10.jpg', title: 'Design Work 10', lessons: 'Inspiration' },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="myworks" className="gallery">
            <div className="container">
                <div className="gallery__header">
                    <h2 className="section-title">MY WORKS</h2>
                    <div className="deco-lines"></div>
                </div>

                <div className="gallery__grid">
                    {images.map((image) => (
                        <div key={image.id} className="card">
                            <div className="card__image-container">
                                <img src={image.src} alt={image.title} loading="lazy" />
                            </div>
                            <div className="card__content">
                                <span className="card__meta">{image.lessons}</span>
                                <h3 className="card__title">{image.title}</h3>
                                <button
                                    className="card__btn"
                                    aria-label="View details"
                                    onClick={() => openModal(image)}
                                >
                                    <span className="card__btn-icon">👀</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gallery__footer">
                    <button className="btn-black">More topics</button>
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
