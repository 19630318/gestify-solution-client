import { File } from "../file/file";
// Representa un producto disponible en la tienda
export interface Product {
    sallerId: string; // ID del vendedor asociado al producto
    sallerName: string; // Nombre del vendedor asociado al producto
    idProduct: string; // Identificador único del producto
    name: string; // Nombre del producto
    description: string; // Descripción detallada del producto
    images: File[]; // Lista de imágenes asociadas al producto
    price: number; // Precio base del producto (sin descuento)
    discountPercentage?: number; // Porcentaje de descuento aplicado al producto (si existe)
    stock: number; // Cantidad disponible en inventario
    isActive: boolean; // Indica si el producto está visible/publicado en la tienda
    category: string; // Categoría principal a la que pertenece el producto
    subCategory?: string; // Subcategoría del producto (opcional)
    brand: string; // Marca del producto
    review?: Review[]; // Lista de reseñas de usuarios (opcional)
    numberOfReviews?: number; // Número total de reseñas asociadas al producto
    numberOfSales?: number; // Número total de ventas del producto
    isNew?: boolean; // Indica si el producto es nuevo (ej: reciente en catálogo)
    tags?: Tag[]; // Lista de etiquetas o tags aplicados al producto (ej: "Eco", "Popular")
    analytics?: ProductAnalytics; // Métricas y datos analíticos del producto (opcional)
    createdAt: Date; // Fecha de creación del producto
    updatedAt: Date; // Fecha de última actualización del producto
}

// Representa una reseña hecha por un usuario sobre un producto
export interface Review {
    idReview: string; // Identificador único de la reseña
    idProduct: string; // ID del producto al que se refiere la reseña
    idUser: string; // ID del usuario que hizo la reseña
    rating: number; // Calificación otorgada (ej: 1 a 5 estrellas)
    comment: string; // Comentario escrito por el usuario
    createdAt: Date; // Fecha de creación de la reseña
    updatedAt: Date; // Fecha de última modificación de la reseña
}

// Representa una etiqueta que puede ser asignada a productos
export interface Tag {
    idTag: string; // Identificador único del tag
    name: string; // Nombre del tag (ej: "Recomendado", "En oferta")
    description?: string; // Descripción opcional del tag
    color?: string; // Color asociado para representar visualmente el tag (ej: "#FF0000")
    icon?: string; // Nombre del ícono que representa el tag (opcional)
    isActive: boolean; // Indica si el tag está activo o no
    createdAt: Date; // Fecha de creación del tag
    updatedAt: Date; // Fecha de última modificación del tag
}

// Contiene métricas y datos analíticos para evaluar el rendimiento de un producto
export interface ProductAnalytics {
    views: number; // Número total de visualizaciones del producto
    uniqueViews: number; // Número de usuarios únicos que vieron el producto
    clicks: number; // Cantidad de veces que se hizo clic en el producto desde otras vistas (listados, banners)
    addToCartCount: number; // Número de veces que el producto fue agregado al carrito
    numberOfSales: number; // Número total de unidades vendidas del producto
    salesPerDay: Record<string, number>; // Ventas del producto desglosadas por fecha (formato: "YYYY-MM-DD")
    revenueGenerated: number; // Ingresos generados por las ventas del producto
    averageOrderValue: number; // Valor promedio de los pedidos que incluyeron este producto
    averageRating: number; // Calificación promedio basada en las reseñas
    ratingDistribution: Record<number, number>; // Distribución de calificaciones (ej: {5: 10, 4: 4, 3: 2, ...})
    returnRate: number; // Porcentaje de productos devueltos sobre el total vendido
    complaintCount: number; // Número de quejas recibidas relacionadas con este producto
    trendingScore: number; // Puntaje que refleja qué tan "en tendencia" está el producto (calculado con vistas, ventas, etc.)
    growthRate: number; // Tasa de crecimiento de ventas (semanal, mensual, etc.)
    stockTurnoverRate: number; // Frecuencia con la que el inventario del producto se vende y repone
    timeOnPage: number; // Tiempo promedio que los usuarios pasan en la página del producto (en segundos)
}