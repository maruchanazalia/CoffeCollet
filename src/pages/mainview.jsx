import React, { useState } from 'react';
import '../styles/mainview.css';
import { 
  Search, 
  Filter, 
  MessageCircle, 
  User, 
  Bell, 
  Coffee, 
  Heart, 
  PlusCircle,
  ChevronDown,
  Briefcase,
  Map,
  DollarSign
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('crear');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  const [filters, setFilters] = useState({
    region: '',
    type: '',
    priceRange: '',
    certification: []
  });

  const handleFilterChange = (category, value) => {
    if (category === 'certification') {
      // Toggle certification selection
      const updatedCertifications = filters.certification.includes(value)
        ? filters.certification.filter(item => item !== value)
        : [...filters.certification, value];
      
      setFilters({
        ...filters,
        certification: updatedCertifications
      });
    } else {
      setFilters({
        ...filters,
        [category]: value
      });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const users = [
    {
      id: 1,
      name: 'Cooperativa Santa María',
      type: 'Productor',
      location: 'Huehuetenango, Guatemala',
      image: '/api/placeholder/60/60',
      description: 'Productores de café de especialidad con más de 10 años de experiencia. Certificación orgánica y comercio justo.',
      rating: 4.8,
      products: ['Arábica', 'Bourbon', 'Caturra']
    },
    {
      id: 2,
      name: 'Café del Valle',
      type: 'Productor',
      location: 'Valle del Cauca, Colombia',
      image: '/api/placeholder/60/60',
      description: 'Cultivamos café de altura con procesos naturales y honey. Ganadores del premio a mejor micro-lote 2023.',
      rating: 4.7,
      products: ['Geisha', 'Pacamara', 'Típica']
    },
    {
      id: 3,
      name: 'Importadora Café Express',
      type: 'Comprador',
      location: 'Barcelona, España',
      image: '/api/placeholder/60/60',
      description: 'Buscamos relaciones directas con productores para abastecer a tostadores artesanales en Europa.',
      rating: 4.6,
      products: ['Granos verdes', 'Micro-lotes']
    },
    {
      id: 4,
      name: 'Tostadores Unidos',
      type: 'Comprador',
      location: 'Ciudad de México, México',
      image: '/api/placeholder/60/60',
      description: 'Red de tostadores independientes interesados en crear relaciones directas con productores.',
      rating: 4.9,
      products: ['Micro-lotes', 'Procesos experimentales']
    }
  ];

  return (
    <div className="dashboard">
      {/* Header with notification and profile */}
      <header className="dashboard-header">
        <div className="header-logo">
          <Coffee size={24} />
          <span>CAFECOLET</span>
        </div>
        
        <div className="header-right">
          <button className="notification-btn">
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>
          <div className="profile-menu">
            <img src="/api/placeholder/36/36" alt="Profile" className="profile-image" />
            <span className="profile-name">Juan Pérez</span>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>

      {/* Navigation */}
      <nav className={`dashboard-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul>
          <li className={activeTab === 'oportunidades' ? 'active' : ''} onClick={() => setActiveTab('oportunidades')}>
            <Briefcase size={20} />
            <span>Oportunidades</span>
          </li>
          <li className={activeTab === 'crear' ? 'active' : ''} onClick={() => setActiveTab('crear')}>
            <PlusCircle size={20} />
            <span>Crear</span>
          </li>
          <li className={activeTab === 'chats' ? 'active' : ''} onClick={() => setActiveTab('chats')}>
            <MessageCircle size={20} />
            <span>Chats</span>
            <span className="badge">5</span>
          </li>
          <li className={activeTab === 'cuenta' ? 'active' : ''} onClick={() => setActiveTab('cuenta')}>
            <User size={20} />
            <span>Mi Cuenta</span>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="dashboard-content">
        <div className="content-header">
          <h1>Conectar con Profesionales del Café</h1>
          <p>Encuentra productores, compradores y expertos en la industria del café</p>
        </div>

        {/* Search and filters */}
        <div className="search-section">
          <div className="search-container">
            <div className="search-input-wrapper">
              <Search size={20} className="search-icon" />
              <input 
                type="text" 
                placeholder="Buscar por nombre, ubicación o tipo de café..." 
                className="search-input"
              />
            </div>
            <button 
              className="filter-toggle-btn" 
              onClick={() => setFilterMenuOpen(!filterMenuOpen)}
            >
              <Filter size={18} />
              <span>Filtros</span>
              <ChevronDown size={16} className={filterMenuOpen ? 'rotate' : ''} />
            </button>
          </div>

          {/* Expandable filter section */}
          <div className={`filter-section ${filterMenuOpen ? 'open' : ''}`}>
            <div className="filter-group">
              <h3>Región</h3>
              <select 
                value={filters.region} 
                onChange={(e) => handleFilterChange('region', e.target.value)}
              >
                <option value="">Todas las regiones</option>
                <option value="latinoamerica">Latinoamérica</option>
                <option value="africa">África</option>
                <option value="asia">Asia</option>
              </select>
            </div>

            <div className="filter-group">
              <h3>Tipo</h3>
              <select 
                value={filters.type} 
                onChange={(e) => handleFilterChange('type', e.target.value)}
              >
                <option value="">Todos los tipos</option>
                <option value="productor">Productor</option>
                <option value="comprador">Comprador</option>
                <option value="tostador">Tostador</option>
              </select>
            </div>

            <div className="filter-group">
              <h3>Rango de Precio</h3>
              <select 
                value={filters.priceRange} 
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="">Cualquier precio</option>
                <option value="bajo">Económico</option>
                <option value="medio">Precio medio</option>
                <option value="premium">Premium</option>
              </select>
            </div>

            <div className="filter-group">
              <h3>Certificaciones</h3>
              <div className="checkbox-group">
                <label>
                  <input 
                    type="checkbox" 
                    checked={filters.certification.includes('organico')}
                    onChange={() => handleFilterChange('certification', 'organico')}
                  />
                  Orgánico
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    checked={filters.certification.includes('fair-trade')}
                    onChange={() => handleFilterChange('certification', 'fair-trade')}
                  />
                  Comercio Justo
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    checked={filters.certification.includes('rainforest')}
                    onChange={() => handleFilterChange('certification', 'rainforest')}
                  />
                  Rainforest Alliance
                </label>
              </div>
            </div>

            <div className="filter-buttons">
              <button className="filter-clear-btn">Limpiar filtros</button>
              <button className="filter-apply-btn">Aplicar</button>
            </div>
          </div>
        </div>

        {/* Results section */}
        <div className="results-section">
          <div className="results-header">
            <h2>Resultados <span className="results-count">(24)</span></h2>
            <button className="create-btn">
              <PlusCircle size={18} />
              Crear Conexión
            </button>
          </div>

          <div className="user-grid">
            {users.map(user => (
              <div className="user-card" key={user.id}>
                <div className="user-card-header">
                  <img src={user.image} alt={user.name} className="user-image" />
                  <div className="user-info">
                    <h3>{user.name}</h3>
                    <div className="user-meta">
                      <span className="user-type">{user.type}</span>
                      <div className="user-location">
                        <Map size={14} />
                        <span>{user.location}</span>
                      </div>
                    </div>
                    <div className="user-rating">
                      <div className="stars">{'★'.repeat(Math.floor(user.rating))}{'☆'.repeat(5 - Math.floor(user.rating))}</div>
                      <span>{user.rating}</span>
                    </div>
                  </div>
                  <button className="favorite-btn">
                    <Heart size={18} />
                  </button>
                </div>
                <div className="user-card-body">
                  <p className="user-description">{user.description}</p>
                  <div className="product-tags">
                    {user.products.map((product, index) => (
                      <span className="product-tag" key={index}>{product}</span>
                    ))}
                  </div>
                </div>
                <div className="user-card-footer">
                  <button className="contact-btn">
                    <MessageCircle size={16} />
                    Contactar
                  </button>
                  <button className="profile-btn">Ver perfil</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pagination">
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <span className="pagination-ellipsis">...</span>
            <button className="pagination-btn">8</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;