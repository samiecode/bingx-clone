import './style.css'
import Alpine from 'alpinejs';


Alpine.data('spot', () => ({
  coins: null,
  getCoins() {
    this.coins = data
  }
}))

Alpine.data('menubar', () => ({
  open: false,
  toggle() {
    this.open = !this.open
  }
}))

window.Alpine = Alpine

Alpine.start();
