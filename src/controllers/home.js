module.exports = 
{
    async pagInicialGet(req, res)  //renderizar o ejs
    {
        res.render('../views/index');
    },
    async pagAluno(req, res)  //renderizar o ejs
    {
        res.render('../views/aluno');
    },
    async pagSala(req, res)  //renderizar o ejs
    {
        res.render('../views/sala');
    }
}