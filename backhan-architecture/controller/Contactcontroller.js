const contactquery = require('../modal/contactquery');



exports.contactquery = async (req, res) => {
    try {
        const { name, email, query } = req.body;

        const record = new contactquery({
            name: name,
            email: email,
            query: query,
            status:"unread"
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


exports.findquery= async (req,res)=>{
   const find= await  contactquery.find()
   res.json({
    data:find,
    message:"successfully find data"
   })


}

exports.findbyidcontact = async (req, res) => {
    const id = req.params.id;

    try {
        const contact = await contactquery.findById(id);
        if (!contact) {
            return res.status(404).json({ message: 'contact not found' });
        }
        res.json(contact);
    } catch (error) {
        console.error('Error fetching project by ID:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};