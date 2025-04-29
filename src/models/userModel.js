import { Prisma } from "../../prisma/prisma.js";

class UserModel {
    // obter todos os usuários
    async findAll() {
        const users = await prisma.user.findMany();

        return users;
    }

    // obter um usuário pelo id
    async findById(id) {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id),
            },
        });

        return user;
    }

    //obter usuario pelo email
    async findByEmail(email) {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        return user;
    }
    // criar um usuário
    async create(data) {
        const user = await prisma.user.create({
            data,
        });

        return user;
    }

    // atualizar um usuário
    async update(id, data) {
        const user = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data
        });

        return user;
    }

    // deletar um usuário
    async delete(id) {
        await prisma.user.delete({
            where: {
                id: Number(id)
            }
        });

        return true;
    }
}

export default new UserModel();