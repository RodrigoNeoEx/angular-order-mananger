const OrderService = {
  generateMessageLink(order) {
    const phoneNumber = "5513991164296"; // Número do cliente no formato internacional
    const message = encodeURIComponent(`
Pedido nº ${order.id}

Itens:
${order.items.map(item => `${item.quantity}x ${item.name} + ${item.details}`).join('\n')}

💳 ${order.paymentMethod}
🚚 Delivery (taxa de: ${order.deliveryFee}): 
📍 ${order.address} (Estimativa: ${order.deliveryTime})

Total: ${order.total}

Obrigado pela preferência, se precisar de algo é só chamar! 😊
    `);

    return `https://wa.me/${phoneNumber}?text=${message}`;
  },

  sendMessage(order) {
    const link = this.generateMessageLink(order);
    window.open(link, "_blank"); // Abre o WhatsApp Web em uma nova aba
  }
};

export default OrderService;