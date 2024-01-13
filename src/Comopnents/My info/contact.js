
const currentYear = new Date().getFullYear();

const ismonthpass = new Date().getMonth();

const isdatepaas = new Date().getDate();


var myage = currentYear - 2003;

if(ismonthpass < 8 && isdatepaas <24)
{
    myage--;
}



const Contact = [
    {keyy : "Age" , val: myage},
    {keyy : "Phone" , val: "+91 9322681386"},
    {keyy : "Address" , val: "Pune , India - 411005"},
    {keyy : "Mail" , val: "contact.nagare@gmail.com"},

    ];

export default Contact;