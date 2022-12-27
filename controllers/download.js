import fs from "fs"
export const getImageForLecturer = async (req, res) => {
    const { path } = req.params
    fs.readFile(`./uploads/lecturers/pictures/${path}`, (err, data) => {
        const ext = path.split(".")[1]
        console.log(ext)
        if (err) {
            console.log(err)
            res.status(500).json({
                status: 500,
                message: "Error!",
                error: err
            })
        } else {
            console.log(data)
            res.writeHead(200, {
                'Content-Length': Buffer.byteLength(data),
                // 'Content-Type': `image/${ext}`,
                'Content-Disposition': "attachment; filename=" + `${path}`
            }).end(Buffer.from(data, "base64"))
            console.log('Downloaded!')
        }
    })
}

export const getFileForLecturer = async (req, res) => {
    const { path } = req.params
    fs.readFile(`./uploads/lecturers/files/${path}`, (err, data) => {
        const ext = path.split(".")[1]
        console.log(ext)
        if (err) {
            console.log(err)
            res.status(500).json({
                status: 500,
                message: "Error!",
                error: err
            })
        } else {
            console.log(data)
            res.writeHead(200, {
                'Content-Length': Buffer.byteLength(data),
                // 'Content-Type': `image/${ext}`,
                'Content-Disposition': "attachment; filename=" + `${path}`
            }).end(Buffer.from(data, "base64"))
            console.log('Downloaded!')
        }
    })
}
