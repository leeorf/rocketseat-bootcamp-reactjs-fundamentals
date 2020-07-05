const formatDate = (createdAt: Date): string => {
  const date = new Date(createdAt);
  return date.toLocaleDateString('pt-BR');
};

export default formatDate;
