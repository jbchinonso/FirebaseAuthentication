//LISTEN FOR LOGIN, LOGOUT
auth.onAuthStateChanged(user => {
    if (user) {
        //GET DATA FROM DATABASE
        db.collection('guides').get().then(snapshot => {
            setupGuides(snapshot.docs)
        })
    } else {
        setupGuides([])
    }
})


//SIGN UP FUNCTION
const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    const cred = await auth.createUserWithEmailAndPassword(email, password)

    console.log(cred.user);

    const modal = document.querySelector('#modal-signup')

    signupForm.reset()
    M.Modal.getInstance(modal).close();

    
})


//LOGOUT FUNCTION
const logout = document.querySelector('#logout')
logout.addEventListener('click', async (e) => {
    e.preventDefault()
    try {
        await auth.signOut();
        console.log('user logged out successfully');
    } catch (error) {
        console.error(error)
    }
})


///LOGIN FUNCTIONALITY
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', async(e) => {
    e.preventDefault()

    const email = loginForm['login-email'].value
    const password = loginForm['login-password'].value

    try {
        const cred = await auth.signInWithEmailAndPassword(email, password)
        console.log('sign in successful');
        loginForm.reset()

        const modal = document.querySelector('#modal-login')
        M.Modal.getInstance(modal).close()

    } catch (error) {
        console.log(error);
    }
})




