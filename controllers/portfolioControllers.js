const sendEmailController =(req,res) =>{
    try {
        return res.status(200).send({
            success:true,
            message:'your message sent successfully'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Send Email Error',
            error
        })
    }
};
module.exports={sendEmailController};