const contactquery = require('../modal/contactquery');



exports.contactquery = async (req, res) => {
    try {
        const { name, email, subject, query } = req.body;

        const record = new contactquery({
            name: name,
            email: email,
            subject: subject,
            query: query
        });

        await record.save();
        console.log(record);
        res.json({
            message: "Your query has been submitted.",
            statusCode: 202,
            data: record
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.findquery=(req,res)=>{





}
