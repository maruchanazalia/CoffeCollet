import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/registro.css';

const Registro = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    
    if (!formData.type) {
      newErrors.type = 'Por favor selecciona tu tipo de cuenta';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }
    
    if (!formData.lastname.trim()) {
      newErrors.lastname = 'El apellido es obligatorio';
    }
    
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato del correo electrónico no es válido';
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Por favor confirma la contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateStep2()) {
      setIsLoading(true);
      
      try {
        // Convert string type to numeric value (0 for comprador, 1 for comerciante)
        const userTypeValue = formData.type === 'comprador' ? 0 : 1;
        
        // Create an object with only the necessary data for registration
        const registrationData = {
          type: userTypeValue,
          name: formData.name,
          lastname: formData.lastname,
          email: formData.email,
          password: formData.password
        };
  
        // Send only the necessary data to the API
        const response = await axios.post('http://localhost:2025/api/users/register', registrationData);
        
        console.log('Registration successful:', response.data);
        
        // Redirect the user to the login page
        navigate('/login');
        
      } catch (error) {
        console.error('Registration error:', error);
        
        if (error.response) {
          setErrors({ 
            form: error.response.data.message || 'Error al registrar. Por favor intenta de nuevo más tarde.' 
          });
        } else {
          setErrors({ 
            form: 'Error de conexión. Por favor intenta de nuevo más tarde.' 
          });
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-card">
        <div className="registro-header">
          <h2>Crear Cuenta</h2>
          <p>Únete a la comunidad del café</p>
        </div>
        
        {errors.form && <div className="error-message">{errors.form}</div>}
        
        <div className="steps-indicator">
          <div className={`step-circle ${step >= 1 ? 'active' : ''}`}>1</div>
          <div className="step-line"></div>
          <div className={`step-circle ${step >= 2 ? 'active' : ''}`}>2</div>
        </div>
        
        {step === 1 ? (
          <div className="step-content">
            <h3>¿Qué tipo de usuario eres?</h3>
            <p className="step-description">Esto nos ayudará a personalizar tu experiencia</p>
            
            <div className="user-type-selection">
              <div 
                className={`type-card ${formData.type === 'comprador' ? 'selected' : ''}`}
                onClick={() => handleChange({ target: { name: 'type', value: 'comprador' } })}
              >
                <div className="type-icon buyer-icon">🛒</div>
                <h4>Comprador</h4>
                <p>Estoy buscando proveedores de café de calidad</p>
              </div>
              
              <div 
                className={`type-card ${formData.type === 'comerciante' ? 'selected' : ''}`}
                onClick={() => handleChange({ target: { name: 'type', value: 'comerciante' } })}
              >
                <div className="type-icon seller-icon">🌱</div>
                <h4>Comerciante</h4>
                <p>Quiero vender mi café a compradores potenciales</p>
              </div>
            </div>
            
            {errors.type && <span className="error-text center-error">{errors.type}</span>}
            
            <button 
              className="next-button"
              onClick={handleNextStep}
            >
              Continuar
            </button>
          </div>
        ) : (
          <div className="step-content">
            <h3>Completa tu información</h3>
            <p className="step-description">Te has registrado como: <span className="user-type">{formData.type}</span></p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={errors.name ? 'input-error' : ''}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastname">Apellido</label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Tu apellido"
                    className={errors.lastname ? 'input-error' : ''}
                  />
                  {errors.lastname && <span className="error-text">{errors.lastname}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@ejemplo.com"
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Al menos 8 caracteres"
                    className={errors.password ? 'input-error' : ''}
                  />
                  {errors.password && <span className="error-text">{errors.password}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirma tu contraseña"
                    className={errors.confirmPassword ? 'input-error' : ''}
                  />
                  {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                </div>
              </div>
              
              <div className="form-actions">
                <button 
                  type="button" 
                  className="back-button"
                  onClick={() => setStep(1)}
                >
                  Atrás
                </button>
                
                <button 
                  type="submit" 
                  className="register-button"
                  disabled={isLoading}
                >
                  {isLoading ? 'Registrando...' : 'Completar Registro'}
                </button>
              </div>
            </form>
          </div>
        )}
        
        <div className="registro-footer">
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/login" className="login-link">Iniciar Sesión</Link>
        </div>
      </div>
      
      <div className="registro-image">
        <div className="overlay"></div>
        <div className="registro-caption">
          <h2>Únete a CafeColet</h2>
          <p>Conectamos a compradores y comerciantes de café para crear oportunidades mutuas</p>
        </div>
      </div>
    </div>
  );
};

export default Registro;