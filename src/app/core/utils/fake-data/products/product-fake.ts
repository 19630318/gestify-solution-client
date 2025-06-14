import { faker } from '@faker-js/faker';
import { Product, Tag, Review } from '@core/interfaces/product/product';
import { File, TypeFile } from '@core/interfaces/file/file';

// ✅ Generar una imagen simulada
function generateFakeImage(idReference: string): File {
    return {
        idFile: faker.string.uuid(),
        idReference,
        name: faker.system.fileName(),
        type: TypeFile.IMAGE,
        description: faker.commerce.productDescription(),
        url: faker.image.urlLoremFlickr({ category: 'product' }),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
    };
}

// ✅ Generar un tag falso
function generateFakeTag(): Tag {
    return {
        idTag: faker.string.uuid(),
        name: faker.word.sample(),
        description: faker.lorem.sentence(),
        color: faker.color.rgb({ prefix: '#' }),
        icon: faker.helpers.arrayElement(['star', 'percent', 'fire', 'tag']),
        isActive: faker.datatype.boolean(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
    };
}

// ✅ Generar una reseña falsa
function generateFakeReview(idProduct: string): Review {
    return {
        idReview: faker.string.uuid(),
        idProduct,
        idUser: faker.string.uuid(),
        rating: faker.number.int({ min: 1, max: 5 }),
        comment: faker.lorem.sentences({ min: 1, max: 3 }),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
    };
}

// ✅ Generador principal de productos
export function generateFakeProduct(): Product {
    const idProduct = faker.string.uuid();
    const sallerId = faker.string.uuid();
    const reviews = faker.helpers.multiple(() => generateFakeReview(idProduct), {
        count: { min: 0, max: 5 },
    });

    const tags = faker.helpers.multiple(() => generateFakeTag(), {
        count: { min: 0, max: 3 },
    });

    return {
        sallerId,
        idProduct,
        sallerName: faker.person.fullName(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        images: [generateFakeImage(idProduct), generateFakeImage(idProduct)],
        price: parseFloat(faker.commerce.price({ min: 10, max: 1000 })),
        discountPercentage: faker.datatype.boolean() ? faker.number.int({ min: 5, max: 50 }) : undefined,
        stock: faker.number.int({ min: 0, max: 100 }),
        isActive: faker.datatype.boolean(),
        category: faker.commerce.department(),
        subCategory: faker.datatype.boolean() ? faker.commerce.productAdjective() : undefined,
        brand: faker.company.name(),
        review: reviews.length ? reviews : undefined,
        numberOfReviews: reviews.length || undefined,
        numberOfSales: faker.datatype.boolean() ? faker.number.int({ min: 0, max: 500 }) : undefined,
        isNew: faker.datatype.boolean(),
        tags: tags.length ? tags : undefined,
        createdAt: faker.date.past({ years: 1 }),
        updatedAt: faker.date.recent(),
    };
}

export function generateFakeProducts(count: number): Product[] {
    return Array.from({ length: count }, generateFakeProduct);
}