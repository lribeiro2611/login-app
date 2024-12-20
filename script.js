const loginForm = document.getElementById('loginForm');
const registerButton = document.getElementById('registerButton');
const registerForm = document.getElementById('registerForm');
const registerContainer = document.getElementById('registerContainer');

// Base de dados simulada com utilizador pré-cadastrado
let users = {
    Edershow: 'leodev' // Usuário pré-cadastrado
};

// Lidar com o login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar o reload da página
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Verificar se o utilizador existe e se a senha está correta
    if (users[username] && users[username] === password) {
        alert('Login bem-sucedido!');
        // Redirecionar para o LinkedIn
        window.location.href = 'https://www.linkedin.com/in/leonardo-antonino-566759a7/';
    } else {
        alert('Usuário ou senha incorretos.');
    }
});

// Mostrar formulário de cadastro
registerButton.addEventListener('click', () => {
    // Alternar a exibição do formulário de cadastro
    registerContainer.classList.toggle('hidden');
});

// Lidar com o cadastro
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar o reload da página

    const newUsername = document.getElementById('newUsername').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();

    // Verificar se o utilizador já existe
    if (users[newUsername]) {
        alert('Usuário já existe. Tente outro nome.');
    } else if (newUsername === '' || newPassword === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        // Adicionar o novo utilizador à "base de dados"
        users[newUsername] = newPassword;
        alert('Usuário cadastrado com sucesso!');

        // Limpar os campos de cadastro
        document.getElementById('newUsername').value = '';
        document.getElementById('newPassword').value = '';

        // Ocultar o formulário de cadastro
        registerContainer.classList.add('hidden');
    }
});
