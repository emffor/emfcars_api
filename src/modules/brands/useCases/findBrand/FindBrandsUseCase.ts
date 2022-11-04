import { prisma } from "../../../../database/prismaClients";


export class FindBrandsUseCase {
    async execute() {
        const brands = await prisma.brands.findMany();

        return brands;
    }
}