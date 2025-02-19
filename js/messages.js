class MessageSystem {
    constructor() {
    this.messageInput = document.getElementById('message-input');
    this.submitButton = document.getElementById('submit-message');
    this.messagesContainer = document.getElementById('messages-container');
    this.messages = this.loadMessages();
    this.initializeEventListeners();
    this.displayMessages();
    }
    initializeEventListeners() {
    this.submitButton.addEventListener('click', () => this.handleSubmit());
    this.messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    this.handleSubmit();
    }
    });
    }
    handleSubmit() {
    const message = this.messageInput.value.trim();
    if (message) {
    this.addMessage(message);
    this.messageInput.value = '';
    }
    }
    addMessage(content) {
    const message = {
    id: Date.now(),
    content: content,
    timestamp: new Date().toISOString(),
    };
    this.messages.unshift(message);
    this.saveMessages();
    this.displayMessages();
    }
    createMessageElement(message) {
    const messageEl = document.createElement('div');
    messageEl.className = 'message-card';
    const date = new Date(message.timestamp);
    const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    messageEl.innerHTML = <div class="message-content">${this.escapeHtml(message.content)}</div> <div class="message-timestamp">${formattedDate}</div> ;
    return messageEl;
    }
    displayMessages() {
    this.messagesContainer.innerHTML = '';
    this.messages.forEach(message => {
    this.messagesContainer.appendChild(this.createMessageElement(message));
    });
    }
    loadMessages() {
    const saved = localStorage.getItem('optics-messages');
    return saved ? JSON.parse(saved) : [];
    }
    saveMessages() {
    localStorage.setItem('optics-messages', JSON.stringify(this.messages));
    }
    escapeHtml(unsafe) {
    return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
    }
    }
    // Initialize the message system when the document is loaded
    document.addEventListener('DOMContentLoaded', () => {
    const messageSystem = new MessageSystem();
    });
    