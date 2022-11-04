import { prisma } from "../../../../database/prismaClients";

interface IUpdateBrand {
    id: string;
    name: string;
    description?: string;
}

export class UpdateBrandsUseCase {
    async execute({ id, name, description }: IUpdateBrand) {
        const brand = await prisma.brands.update({
            where: {
                id,
            },
            data: {
                name,
                description,
            },
        });

        return brand;
    }
}