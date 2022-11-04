import { prisma } from "../../../../database/prismaClients";

interface ICreateBrand {
    name: string;
    description: string;
}

export class CreateBrandsUseCase {

    async execute({ name, description }: ICreateBrand) {
        const brandExists = await prisma.brands.findFirst({
            where: {
                name: {
                    mode: "insensitive",
                }
            }
        })

        if (brandExists) {
            throw new Error("Brand already exists!");
        }

        const brand = await prisma.brands.create({
            data: {
                name,
                description
            },
        });

        return brand;
    }
}
