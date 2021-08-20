const usuariosGet = (req, res) => {
    res.json({
        ok: true,
        data: 'Get API - Controlador'
    })
}

const usuariosPost = (req, res) => {
    const { nombre, edad } = req.body;
    const { id } = req.params;
    const query = req.query;

    res.json({
        ok: true,
        nombre,
        edad,
        id,
        query
    })
}

const usuariosPut = (req, res) => {
    res.json({
        ok: true,
        nombre: 'Put API - Controlador'
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        ok: true,
        data: 'Patch API - Controlador'
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        data: 'Delete API - Controlador'
    })
}
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}