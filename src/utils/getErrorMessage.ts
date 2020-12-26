export const getErrorMessage = (error: any) => {
  switch (error.code) {
    case 'auth/invalid-email':
      return 'E-mail inválido';
    case 'auth/user-disabled':
      return 'Usuário foi desativado';
    case 'auth/user-not-found':
      return 'Usuário não encontrado';
    case 'auth/wrong-password':
      return 'Senha incorreta';
    case 'auth/weak-password':
      return 'A senha deve ter pelo menos 6 caracteres';
    default:
      return error.message;
  }
};
