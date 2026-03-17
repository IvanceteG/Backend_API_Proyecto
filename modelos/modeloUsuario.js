import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const usuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'L\'email és obligatori'],
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'La contrasenya és obligatòria'],
    minlength: 6,
    select: false
  },
  rol: {
    type: String,
    enum: ['usuari', 'admin'],
    default: 'usuari'
  }
}, { timestamps: true });

// Hashear solo si password es nueva o modificada
usuarioSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Método para comprobar contraseña
usuarioSchema.methods.comprovarPassword = async function(candidat){
  return bcrypt.compare(candidat, this.password);
};

export default mongoose.models.Usuari || mongoose.model('Usuari', usuarioSchema);