function data() {
    let a = document.getElementById("p1").value;
    let b = document.getElementById("p2").value;
    let c = document.getElementById("p3").value;
    let d = document.getElementById("p4").value;

    // empty field validation
    if (a == "" || b == "" || c == "" || d == "")
    {
        alert("All fields are mandatory")
        return false;
    }
        
    // contact no length validation
    else if (b.length < 10 || b.length > 10)
        {
            alert("Number should be of 10 digits ! Please enter valid number")
            return false;
        }

        // no characters validation
    else if (isNaN(b))
        {
            alert("Only numbers are allowed! Please enter valid number")
            return false;
        }

        // same password validation
    else if (c != d)
        {
            alert("Please enter same password")
            return false;
        }

        // password length validation
    else if (c.length < 8 || c.length > 8)
        {
            alert("Password must contain length 8!")
            return false;
        }
     else 
        {
            true;
        }
    
}

// clears input field
function clr()
{
    document.getElementById("p1").value = " ";
    document.getElementById("p2").value = " ";
    document.getElementById("p3").value = "";
    document.getElementById("p4").value = "";
    return false;
}
