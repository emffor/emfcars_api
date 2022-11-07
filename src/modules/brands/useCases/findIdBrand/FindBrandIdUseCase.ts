import { prisma } from "../../../../database/prismaClients";


export class FindBrandIdUseCase {
    async execute(id: string) {
        const brands = await prisma.brands.findMany({
            where: {
                id: id,
            },
            select: {
                id: true,
                name: true,
                description: true,
            }
        });

        if (!brands) {
            throw new Error("Brand not found!");
        }

        return brands;
    }
}