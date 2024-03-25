const sala = require("../model/sala");
const aluno = require("../model/aluno");

module.exports = 
{
    async pagInicialGet(req, res)  //renderizar o ejs
    {
        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome']
        });

        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Foto']
        });

        const selecionado = "padrao";

        res.render('../views/index', { salas, alunos, selecionado });
    },

    async pagInicialPost(req, res)
    {
        const id = req.body.id;

        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Foto'],
            where: { IDSala: id }
        });

        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome']
        });

        const selecionado = id;

        res.render('../views/index', { alunos, salas, selecionado });
    },

    async pagSala(req, res)  //renderizar o ejs
    {
        res.render('../views/sala');
    }
}