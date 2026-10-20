// --- APP DATA & STATE ---
    const menuItems = [
      // Breakfast
      {
        id: 'b1',
        name: "Donny's High-Protein Pancakes",
        category: 'breakfast',
        price: 175.00,
        protein: 40,
        calories: 480,
        desc: "Fluffy protein pancakes served with light sugar-free syrup and fresh berries.",
        tag: "Best Seller",
        iconSvg: `<svg class="w-12 h-12 text-brand-orange" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="5"/></svg>`
      },
      {
        id: 'b2',
        name: "Donny's Anabolic Waffles",
        category: 'breakfast',
        price: 185.00,
        protein: 35,
        calories: 520,
        desc: "Crispy high-protein waffle stack topped with Greek yogurt swirl.",
        tag: "Popular",
        iconSvg: `<svg class="w-12 h-12 text-brand-orange" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>`
      },
      {
        id: 'b3',
        name: "Fried Rice with Egg & Shredded Chicken",
        category: 'breakfast',
        price: 185.00,
        protein: 32,
        calories: 540,
        desc: "Garlic brown rice tossed with double eggs and lean chicken breast strips.",
        tag: "High Protein",
        iconSvg: `<svg class="w-12 h-12 text-brand-orange" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.59L8.41 12 13 7.41 14.41 8.8 11.24 12l3.17 3.19z"/></svg>`
      },
      {
        id: 'b4',
        name: "Garlic Rice w/ Daing na Bangus",
        category: 'breakfast',
        price: 220.00,
        protein: 28,
        calories: 390,
        desc: "Air-fried boneless milkfish served with spiced vinegar and brown garlic rice.",
        tag: "Filipino Favorite",
        iconSvg: `<svg class="w-12 h-12 text-brand-orange" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 18 12 21l7.65-3-0.62-0.39A8.96 8.96 0 0021 12c0-4.97-4.03-9-9-9z"/></svg>`
      },
      {
        id: 'b5',
        name: "Protein French Toast",
        category: 'breakfast',
        price: 160.00,
        protein: 16,
        calories: 340,
        desc: "Whole wheat bread soaked in cinnamon egg white mix.",
        tag: "Quick Bite",
        iconSvg: `<svg class="w-12 h-12 text-brand-orange" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/></svg>`
      },

      // Lunch & Dinner
      {
        id: 'ld1',
        name: "Donny's Prime Rib-eye Steak",
        category: 'lunch-dinner',
        price: 1235.00,
        protein: 55,
        calories: 620,
        desc: "Seared lean rib-eye cut served with grilled asparagus and garlic mash.",
        tag: "Premium",
        iconSvg: `<svg class="w-12 h-12 text-brand-red" viewBox="0 0 24 24" fill="currentColor"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.46 3.9 3.45 4.38L6 22h2l.55-8.62C10.54 12.9 12 11.12 12 9V2h-1v7zm8-7h-2v20h2V2z"/></svg>`
      },
      {
        id: 'ld2',
        name: "Donny's Beef Tenderloin Steak",
        category: 'lunch-dinner',
        price: 985.00,
        protein: 48,
        calories: 450,
        desc: "Tender beef tenderloin medallions cooked to perfection.",
        tag: "Chef Special",
        iconSvg: `<svg class="w-12 h-12 text-brand-red" viewBox="0 0 24 24" fill="currentColor"><path d="M18.06 23h1.66c.84 0 1.53-.65 1.63-1.47L23 5.05h-5V1h-2v4.05h-4V1h-2v4.05H5c-.83 0-1.54.65-1.64 1.48L1 21.53c-.1.82.59 1.47 1.43 1.47h1.66"/></svg>`
      },
      {
        id: 'ld3',
        name: "Donny's Special Garlic Shrimp",
        category: 'lunch-dinner',
        price: 310.00,
        protein: 35,
        calories: 320,
        desc: "Sautéed jumbo shrimp with herb garlic glaze over steamed jasmine rice.",
        tag: "Lean & Clean",
        iconSvg: `<svg class="w-12 h-12 text-brand-red" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`
      },
      {
        id: 'ld4',
        name: "High-Protein Chicken Quesadilla",
        category: 'lunch-dinner',
        price: 260.00,
        protein: 32,
        calories: 490,
        desc: "Grilled chicken, low-fat mozzarella, and salsa wrapped in whole wheat tortilla.",
        tag: "Customer Favorite",
        iconSvg: `<svg class="w-12 h-12 text-brand-red" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 4.2L18.6 19H5.4L12 6.2z"/></svg>`
      },
      {
        id: 'ld5',
        name: "Grilled Salmon with Wild Rice",
        category: 'lunch-dinner',
        price: 875.00,
        protein: 40,
        calories: 510,
        desc: "Rich Omega-3 Norwegian salmon fillet with lemon herb dressing.",
        tag: "Healthy Fats",
        iconSvg: `<svg class="w-12 h-12 text-brand-red" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.59L8.41 12 13 7.41 14.41 8.8 11.24 12l3.17 3.19z"/></svg>`
      },
      {
        id: 'ld6',
        name: "Clara's American Style Lumpia",
        category: 'lunch-dinner',
        price: 285.00,
        protein: 28,
        calories: 380,
        desc: "Crispy lean turkey and vegetable rolls served with sweet chili drop.",
        tag: "Signature Side",
        iconSvg: `<svg class="w-12 h-12 text-brand-red" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v12H4z"/></svg>`
      },

      // Drinks & Shakes
      {
        id: 'd1',
        name: "Mass Gainer Chocolate Shake",
        category: 'drinks',
        price: 190.00,
        protein: 45,
        calories: 580,
        desc: "Double whey isolate shot, cocoa, banana, and oat milk blend.",
        tag: "Post Workout",
        iconSvg: `<svg class="w-12 h-12 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M5 2h14l-2 20H7L5 2zm3 4v2h8V6H8z"/></svg>`
      },
      {
        id: 'd2',
        name: "Isolate Whey Iced Coffee",
        category: 'drinks',
        price: 160.00,
        protein: 25,
        calories: 140,
        desc: "Cold brewed espresso infused with vanilla whey isolate.",
        tag: "Low Calorie",
        iconSvg: `<svg class="w-12 h-12 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3z"/></svg>`
      }
    ];

    let cart = [];

    // --- NAVIGATION ENGINE ---
    function navigateTo(pageId, categoryFilter = 'all') {
      const container = document.getElementById('main-content');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Update Nav active states
      document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-white', 'bg-white/5');
        btn.classList.add('text-brand-muted');
      });
      const activeNav = document.getElementById(`nav-${pageId}`);
      if(activeNav) {
        activeNav.classList.remove('text-brand-muted');
        activeNav.classList.add('text-white');
      }

      // Render corresponding view
      switch(pageId) {
        case 'home':
          container.innerHTML = renderHomePage();
          break;
        case 'menu':
          container.innerHTML = renderMenuPage(categoryFilter);
          break;
        case 'workouts':
          container.innerHTML = renderWorkoutsPage();
          break;
        case 'plans':
          container.innerHTML = renderPlansPage();
          break;
        case 'about':
          container.innerHTML = renderAboutPage();
          break;
        default:
          container.innerHTML = renderHomePage();
      }
    }

    // --- VIEW TEMPLATES ---

    function renderHomePage() {
      return `
        <!-- HERO SECTION -->
        <section class="relative overflow-hidden gradient-hero py-16 sm:py-24 border-b border-brand-cardBorder">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div class="space-y-6 text-center lg:text-left">
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-orange text-xs font-bold tracking-widest uppercase">
                  <i class="fa-solid fa-fire text-brand-orange"></i> Pampanga's Premier Gym & Anabolic Kitchen
                </div>
                
                <h1 class="font-heading text-4xl sm:text-6xl font-bold tracking-wider text-white uppercase leading-tight">
                  TRAIN HARD.<br><span class="text-brand-red">EAT CLEAN.</span>
                </h1>
                
                <p class="text-brand-muted text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Welcome to <strong class="text-white">Donny's Workout and Healthiness</strong> located in Sto. Tomas, Pampanga. We combine top-tier strength training facilities with chef-prepared, macro-friendly meals under one roof.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <button onclick="navigateTo('menu')" class="px-8 py-4 rounded-xl font-bold text-white bg-brand-red hover:bg-brand-redHover shadow-xl shadow-brand-red/25 transition-all flex items-center justify-center gap-3 text-lg">
                    <span>Order Clean Meals</span>
                    <i class="fa-solid fa-utensils"></i>
                  </button>
                  <button onclick="navigateTo('plans')" class="px-8 py-4 rounded-xl font-bold text-white bg-brand-card border border-brand-cardBorder hover:border-brand-orange transition-all flex items-center justify-center gap-2 text-lg">
                    <span>View Gym Rates</span>
                    <i class="fa-solid fa-chevron-right text-xs"></i>
                  </button>
                </div>

                <!-- Stats summary -->
                <div class="grid grid-cols-3 gap-4 pt-8 border-t border-brand-cardBorder/60 max-w-md mx-auto lg:mx-0">
                  <div>
                    <span class="block font-heading text-2xl font-bold text-white">50g+</span>
                    <span class="text-xs text-brand-muted">Max Protein Dishes</span>
                  </div>
                  <div>
                    <span class="block font-heading text-2xl font-bold text-brand-orange">100%</span>
                    <span class="text-xs text-brand-muted">Pure Results</span>
                  </div>
                  <div>
                    <span class="block font-heading text-2xl font-bold text-white">Sto. Tomas</span>
                    <span class="text-xs text-brand-muted">Pampanga Hub</span>
                  </div>
                </div>

              </div>

              <!-- Visual Showcase Box -->
              <div class="relative">
                <div class="relative mx-auto max-w-md lg:max-w-none bg-brand-card border border-brand-cardBorder rounded-3xl p-6 shadow-2xl overflow-hidden">
                  <div class="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/20 rounded-full blur-3xl"></div>
                  
                  <div class="relative z-10 space-y-6">
                    <div class="flex justify-between items-center border-b border-brand-cardBorder pb-4">
                      <div>
                        <span class="text-xs text-brand-orange font-bold uppercase tracking-wider">Featured Today</span>
                        <h3 class="font-title text-xl font-bold text-white">Donny's Rib-eye Steak</h3>
                      </div>
                      <span class="px-3 py-1 rounded-full text-xs font-bold badge-protein text-white">55g Protein</span>
                    </div>

                    <div class="h-56 bg-brand-black/60 rounded-2xl flex items-center justify-center relative overflow-hidden border border-brand-cardBorder/50">
                      <div class="text-center p-6 space-y-3">
                        <i class="fa-solid fa-drumstick-bite text-6xl text-brand-red animate-pulse"></i>
                        <p class="text-xs text-brand-muted">Fresh, non-frozen tender beef cooked with zero oil waste.</p>
                      </div>
                    </div>

                    <div class="flex items-center justify-between pt-2">
                      <div>
                        <span class="text-xs text-brand-muted block">Price per serving</span>
                        <span class="text-2xl font-bold text-white font-title">₱1,235.00</span>
                      </div>
                      <button onclick="addToCart('ld1')" class="px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-orange-600 font-bold text-white text-sm transition-all shadow-md">
                        + Quick Add
                      </button>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- HIGHLIGHTED SERVICES GRID -->
        <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center space-y-2 mb-12">
            <h2 class="font-heading text-3xl sm:text-4xl text-white uppercase tracking-wider">OUR CORE OFFERINGS</h2>
            <p class="text-brand-muted text-sm max-w-md mx-auto">Everything you need to reach your peak physical shape.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-brand-card border border-brand-cardBorder rounded-2xl p-8 hover:border-brand-red transition-all group">
              <div class="w-14 h-14 rounded-2xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-dumbbell"></i>
              </div>
              <h3 class="font-title text-xl font-bold text-white mb-2">Gym Floor Access</h3>
              <p class="text-brand-muted text-sm leading-relaxed mb-4">Complete free weights, power racks, cardio equipment, and dedicated lifting platforms.</p>
              <button onclick="navigateTo('plans')" class="text-brand-orange font-semibold text-sm hover:underline">Check Membership Plans &rarr;</button>
            </div>

            <div class="bg-brand-card border border-brand-cardBorder rounded-2xl p-8 hover:border-brand-orange transition-all group">
              <div class="w-14 h-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-utensils"></i>
              </div>
              <h3 class="font-title text-xl font-bold text-white mb-2">High-Protein Kitchen</h3>
              <p class="text-brand-muted text-sm leading-relaxed mb-4">Delicious meals calculated for exact protein and calorie targets. Eat after your workout session!</p>
              <button onclick="navigateTo('menu')" class="text-brand-orange font-semibold text-sm hover:underline">Explore Kitchen Menu &rarr;</button>
            </div>

            <div class="bg-brand-card border border-brand-cardBorder rounded-2xl p-8 hover:border-brand-red transition-all group">
              <div class="w-14 h-14 rounded-2xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-user-ninja"></i>
              </div>
              <h3 class="font-title text-xl font-bold text-white mb-2">Personal Coaching</h3>
              <p class="text-brand-muted text-sm leading-relaxed mb-4">Get tailored workout programs and 1-on-1 guidance from coach Crish Wokes and team.</p>
              <button onclick="navigateTo('workouts')" class="text-brand-orange font-semibold text-sm hover:underline">View Workout Programs &rarr;</button>
            </div>
          </div>
        </section>

        <!-- TOP SELLERS SECTION -->
        <section class="py-12 bg-brand-card/40 border-t border-brand-cardBorder">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span class="text-brand-orange font-bold text-xs uppercase tracking-widest">Macro-Nutrient Packed</span>
                <h2 class="font-heading text-3xl text-white uppercase tracking-wide">Popular Best Sellers</h2>
              </div>
              <button onclick="navigateTo('menu')" class="text-brand-red font-bold text-sm hover:underline flex items-center gap-2">
                <span>View Full Menu</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              ${menuItems.slice(0, 3).map(item => renderFoodCard(item)).join('')}
            </div>
          </div>
        </section>
      `;
    }

    function renderFoodCard(item) {
      return `
        <div class="bg-brand-card border border-brand-cardBorder rounded-2xl overflow-hidden hover:border-brand-red/50 transition-all flex flex-col justify-between group">
          <div class="p-6">
            <div class="flex justify-between items-start gap-2 mb-4">
              <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-brand-black text-brand-orange border border-brand-cardBorder">${item.tag}</span>
              <div class="text-right">
                <span class="text-xs text-brand-muted block">Protein</span>
                <span class="text-sm font-bold text-brand-orange">${item.protein}g</span>
              </div>
            </div>

            <div class="flex items-center gap-4 mb-4">
              <div class="p-3 bg-brand-black rounded-xl border border-brand-cardBorder group-hover:scale-105 transition-transform">
                ${item.iconSvg}
              </div>
              <div>
                <h3 class="font-title font-bold text-white text-lg leading-tight">${item.name}</h3>
                <p class="text-xs text-brand-muted mt-1">${item.calories} Calories</p>
              </div>
            </div>

            <p class="text-xs text-brand-muted line-clamp-2 leading-relaxed mb-4">${item.desc}</p>
          </div>

          <div class="p-6 pt-0 border-t border-brand-cardBorder/50 mt-auto flex items-center justify-between">
            <div>
              <span class="text-[10px] text-brand-muted uppercase block">Price</span>
              <span class="text-xl font-bold text-white font-title">₱${item.price.toFixed(2)}</span>
            </div>
            <button onclick="addToCart('${item.id}')" class="px-4 py-2 rounded-xl bg-brand-red hover:bg-brand-redHover font-semibold text-xs text-white transition-all shadow-md flex items-center gap-1.5">
              <i class="fa-solid fa-plus"></i> Add To Order
            </button>
          </div>
        </div>
      `;
    }

    function renderMenuPage(activeFilter = 'all') {
      const filteredItems = activeFilter === 'all' 
        ? menuItems 
        : menuItems.filter(i => i.category === activeFilter);

      return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <!-- Header -->
          <div class="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span class="text-brand-orange text-xs font-bold uppercase tracking-widest">Donny's Anabolic Kitchen</span>
            <h1 class="font-heading text-4xl sm:text-5xl text-white uppercase tracking-wider">HIGH-PROTEIN MENU</h1>
            <p class="text-brand-muted text-sm">Fuel your body with premium proteins, healthy fats, and complex carbohydrates designed for fitness enthusiasts.</p>
          </div>

          <!-- Category Filter Tabs -->
          <div class="flex flex-wrap justify-center gap-2 mb-10">
            <button onclick="navigateTo('menu', 'all')" class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border border-brand-cardBorder ${activeFilter === 'all' ? 'tab-active' : 'bg-brand-card text-brand-muted hover:text-white'}">
              All Items (${menuItems.length})
            </button>
            <button onclick="navigateTo('menu', 'breakfast')" class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border border-brand-cardBorder ${activeFilter === 'breakfast' ? 'tab-active' : 'bg-brand-card text-brand-muted hover:text-white'}">
              🍳 Breakfast
            </button>
            <button onclick="navigateTo('menu', 'lunch-dinner')" class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border border-brand-cardBorder ${activeFilter === 'lunch-dinner' ? 'tab-active' : 'bg-brand-card text-brand-muted hover:text-white'}">
              🥩 Lunch & Dinner
            </button>
            <button onclick="navigateTo('menu', 'drinks')" class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border border-brand-cardBorder ${activeFilter === 'drinks' ? 'tab-active' : 'bg-brand-card text-brand-muted hover:text-white'}">
              🥤 Shakes & Drinks
            </button>
          </div>

          <!-- Dishes Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${filteredItems.map(item => renderFoodCard(item)).join('')}
          </div>

        </div>
      `;
    }

    function renderWorkoutsPage() {
      return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div class="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span class="text-brand-orange text-xs font-bold uppercase tracking-widest">Structured Training</span>
            <h1 class="font-heading text-4xl sm:text-5xl text-white uppercase tracking-wider">WORKOUT PROGRAMS</h1>
            <p class="text-brand-muted text-sm">Tailored training regimes to accelerate your strength, cardiovascular endurance, and body recomposition.</p>
          </div>

          <!-- Interactive Program Tabs -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <!-- Program 1 -->
            <div class="bg-brand-card border border-brand-cardBorder rounded-2xl p-6 hover:border-brand-red transition-all">
              <div class="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red text-xl mb-4">
                <i class="fa-solid fa-weight-hanging"></i>
              </div>
              <h3 class="font-title text-xl font-bold text-white mb-2">Strength Training</h3>
              <p class="text-xs text-brand-muted leading-relaxed mb-4">Progressive overload compound lifts targeting maximum hypertrophy & raw power output.</p>
              <ul class="space-y-1.5 text-xs text-brand-muted mb-6">
                <li><i class="fa-solid fa-check text-brand-orange mr-2"></i>Heavy Squats & Bench Press</li>
                <li><i class="fa-solid fa-check text-brand-orange mr-2"></i>Deadlift Technique Workshops</li>
                <li><i class="fa-solid fa-check text-brand-orange mr-2"></i>4-Day Upper/Lower Split</li>
              </ul>
              <button onclick="openJoinModal()" class="w-full py-2.5 rounded-xl bg-brand-black border border-brand-cardBorder hover:border-brand-red text-xs font-bold text-white transition-all">Enroll Program</button>
            </div>

            <!-- Program 2 -->
            <div class="bg-brand-card border border-brand-cardBorder rounded-2xl p-6 hover:border-brand-orange transition-all">
              <div class="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange text-xl mb-4">
                <i class="fa-solid fa-heart-pulse"></i>
              </div>
              <h3 class="font-title text-xl font-bold text-white mb-2">Cardio Conditioning</h3>
              <p class="text-xs text-brand-muted leading-relaxed mb-4">High-intensity interval training (HIIT) to boost stamina and accelerate fat loss.</p>
              <ul class="space-y-1.5 text-xs text-brand-muted mb-6">
                <li><i class="fa-solid fa-check text-brand-orange mr-2"></i>Treadmill & Sled Sprints</li>
                <li><i class="fa-solid fa-check text-brand-orange mr-2"></i>Rowing Machine Circuits</li>
                <li><i class="fa-solid fa-check text-brand-orange mr-2"></i>Heart Rate Zone Tracking</li>
              </ul>
              <button onclick="openJoinModal()" class="w-full py-2.5 rounded-xl bg-brand-black border border-brand-cardBorder hover:border-brand-orange text-xs font-bold text-white transition-all">Enroll Program</button>
            </div>

            <!-- Program 3 -->
            <div class="bg-brand-card border border-brand-cardBorder rounded-2xl p-6 hover:border-brand-red transition-all">
              <div class="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red text-xl mb-4">
                <i class="fa-solid fa-spa"></i>
              </div>
              <h3 class="font-title text-xl font-bold text-white mb-2">Health & Mobility</h3>
              <p class="text-xs text-brand-muted leading-relaxed mb-4">Focus on joint health, core stabilization, flexibility, and injury prevention.</p>
              <ul class="space-y-1.5 text-xs text-brand-muted mb-6">
                <li><i class="fa-solid fa-check text-brand-orange mr-2"></i>Active Recovery Stretching</li>
                <li><i class="fa-solid fa-check text-brand-orange mr-2"></i>Posture Correction Routines</li>
                <li><i class="fa-solid fa-check text-brand-orange mr-2"></i>Mobility Drills</li>
              </ul>
              <button onclick="openJoinModal()" class="w-full py-2.5 rounded-xl bg-brand-black border border-brand-cardBorder hover:border-brand-red text-xs font-bold text-white transition-all">Enroll Program</button>
            </div>

            <!-- Program 4 -->
            <div class="bg-brand-card border border-brand-cardBorder rounded-2xl p-6 hover:border-brand-orange transition-all">
              <div class="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange text-xl mb-4">
                <i class="fa-solid fa-child"></i>
              </div>
              <h3 class="font-title text-xl font-bold text-white mb-2">Body Shaping</h3>
              <p class="text-xs text-brand-muted leading-relaxed mb-4">Aesthetic sculpting sessions targeted for muscle tone and overall symmetry.</p>
              <ul class="space-y-1.5 text-xs text-brand-muted mb-6">
                <li><i class="fa-solid fa-check text-brand-orange mr-2"></i>Targeted Glute & Core Work</li>
                <li><i class="fa-solid fa-check text-brand-orange mr-2"></i>Isolation Machines</li>
                <li><i class="fa-solid fa-check text-brand-orange mr-2"></i>Macro Meal Pairing</li>
              </ul>
              <button onclick="openJoinModal()" class="w-full py-2.5 rounded-xl bg-brand-black border border-brand-cardBorder hover:border-brand-orange text-xs font-bold text-white transition-all">Enroll Program</button>
            </div>

          </div>

          <!-- Coach Profile Spotlight -->
          <div class="bg-brand-card border border-brand-cardBorder rounded-3xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div class="w-32 h-32 rounded-2xl bg-brand-black border border-brand-cardBorder flex items-center justify-center text-brand-red text-5xl flex-shrink-0">
              <i class="fa-solid fa-user-gear"></i>
            </div>
            <div class="space-y-3 text-center md:text-left">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-brand-red/20 text-brand-orange border border-brand-red/30">Head Personal Trainer</span>
              <h3 class="font-title text-2xl font-bold text-white">Coach Crish Wokes</h3>
              <p class="text-sm text-brand-muted leading-relaxed">"Whether you are stepping into a gym for the first time or aiming for competitive body building, our tailored coaching ensures steady, measurable results safely."</p>
              <button onclick="openJoinModal()" class="px-5 py-2 rounded-xl bg-brand-red hover:bg-brand-redHover font-bold text-xs text-white transition-all">Book 1-on-1 Assessment</button>
            </div>
          </div>

        </div>
      `;
    }

    function renderPlansPage() {
      return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div class="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span class="text-brand-orange text-xs font-bold uppercase tracking-widest">Affordable Access</span>
            <h1 class="font-heading text-4xl sm:text-5xl text-white uppercase tracking-wider">MEMBERSHIP & RATES</h1>
            <p class="text-brand-muted text-sm">Flexible gym passes and long-term membership packages designed for everyone.</p>
          </div>

          <!-- MEMBERSHIP CARDS -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            <!-- Premium -->
            <div class="bg-brand-card border border-brand-cardBorder rounded-2xl p-8 flex flex-col justify-between hover:border-brand-red transition-all">
              <div>
                <span class="text-xs font-bold text-brand-muted uppercase tracking-wider">Standard Package</span>
                <h3 class="font-title text-2xl font-bold text-white mt-1">Premium Plan</h3>
                <div class="my-6">
                  <span class="text-4xl font-bold font-title text-white">₱299</span>
                  <span class="text-brand-muted text-xs"> / 3 Months</span>
                </div>
                <ul class="space-y-3 text-xs text-brand-muted mb-8">
                  <li class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-orange"></i> Full Gym Floor Access</li>
                  <li class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-orange"></i> Free Locker Usage</li>
                  <li class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-orange"></i> Kitchen Discounts (5%)</li>
                </ul>
              </div>
              <button onclick="openJoinModal('Premium - ₱299 / 3 Months')" class="w-full py-3 rounded-xl bg-brand-black border border-brand-cardBorder hover:border-brand-red font-bold text-xs text-white transition-all">Select Premium</button>
            </div>

            <!-- Gold (Popular) -->
            <div class="bg-brand-card border-2 border-brand-red rounded-2xl p-8 flex flex-col justify-between relative shadow-xl shadow-brand-red/10 scale-105">
              <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full badge-protein text-white text-[11px] font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <div>
                <span class="text-xs font-bold text-brand-orange uppercase tracking-wider">Best Value</span>
                <h3 class="font-title text-2xl font-bold text-white mt-1">Gold Plan</h3>
                <div class="my-6">
                  <span class="text-4xl font-bold font-title text-white">₱499</span>
                  <span class="text-brand-muted text-xs"> / 6 Months</span>
                </div>
                <ul class="space-y-3 text-xs text-brand-muted mb-8">
                  <li class="flex items-center gap-2 text-white"><i class="fa-solid fa-check text-brand-orange"></i> All Premium Benefits</li>
                  <li class="flex items-center gap-2 text-white"><i class="fa-solid fa-check text-brand-orange"></i> 1 Free Personal Training Session</li>
                  <li class="flex items-center gap-2 text-white"><i class="fa-solid fa-check text-brand-orange"></i> Kitchen Discounts (10%)</li>
                  <li class="flex items-center gap-2 text-white"><i class="fa-solid fa-check text-brand-orange"></i> Free Whey Shake Sample</li>
                </ul>
              </div>
              <button onclick="openJoinModal('Gold - ₱499 / 6 Months')" class="w-full py-3.5 rounded-xl bg-brand-red hover:bg-brand-redHover font-bold text-sm text-white transition-all shadow-lg">Select Gold Plan</button>
            </div>

            <!-- Platinum -->
            <div class="bg-brand-card border border-brand-cardBorder rounded-2xl p-8 flex flex-col justify-between hover:border-brand-red transition-all">
              <div>
                <span class="text-xs font-bold text-brand-muted uppercase tracking-wider">Ultimate VIP</span>
                <h3 class="font-title text-2xl font-bold text-white mt-1">Platinum Plan</h3>
                <div class="my-6">
                  <span class="text-4xl font-bold font-title text-white">₱899</span>
                  <span class="text-brand-muted text-xs"> / 9 Months</span>
                </div>
                <ul class="space-y-3 text-xs text-brand-muted mb-8">
                  <li class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-orange"></i> All Gold Benefits Included</li>
                  <li class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-orange"></i> 8 Private Coaching Sessions</li>
                  <li class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-orange"></i> Customized Meal Plan Chart</li>
                  <li class="flex items-center gap-2"><i class="fa-solid fa-check text-brand-orange"></i> Kitchen Discounts (15%)</li>
                </ul>
              </div>
              <button onclick="openJoinModal('Platinum - ₱899 / 9 Months')" class="w-full py-3 rounded-xl bg-brand-black border border-brand-cardBorder hover:border-brand-red font-bold text-xs text-white transition-all">Select Platinum</button>
            </div>

          </div>

          <!-- INTERACTIVE RATE BREAKDOWN CALCULATOR -->
          <div class="bg-brand-card border border-brand-cardBorder rounded-3xl p-8 max-w-4xl mx-auto space-y-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-brand-cardBorder pb-6">
              <div>
                <h3 class="font-title text-xl font-bold text-white">Gym Access Fee Calculator</h3>
                <p class="text-xs text-brand-muted">Calculate rates for short-term daily, weekly, or monthly walk-in access.</p>
              </div>
              
              <!-- Filter buttons -->
              <div class="flex rounded-xl bg-brand-black p-1 border border-brand-cardBorder text-xs">
                <button onclick="updateRateCalc('student')" id="calc-student" class="calc-btn px-3 py-1.5 rounded-lg font-semibold bg-brand-red text-white transition-all">Student</button>
                <button onclick="updateRateCalc('member')" id="calc-member" class="calc-btn px-3 py-1.5 rounded-lg font-semibold text-brand-muted hover:text-white transition-all">Member</button>
                <button onclick="updateRateCalc('nonmember')" id="calc-nonmember" class="calc-btn px-3 py-1.5 rounded-lg font-semibold text-brand-muted hover:text-white transition-all">Non-Member</button>
              </div>
            </div>

            <!-- Calculated Output Cards -->
            <div class="grid grid-cols-3 gap-4 text-center">
              <div class="bg-brand-black/60 border border-brand-cardBorder rounded-2xl p-4">
                <span class="text-xs text-brand-muted block uppercase">Daily Pass</span>
                <span id="rate-daily" class="font-title text-2xl font-bold text-white">₱100</span>
              </div>
              <div class="bg-brand-black/60 border border-brand-cardBorder rounded-2xl p-4">
                <span class="text-xs text-brand-muted block uppercase">Weekly Pass</span>
                <span id="rate-weekly" class="font-title text-2xl font-bold text-brand-orange">₱300</span>
              </div>
              <div class="bg-brand-black/60 border border-brand-cardBorder rounded-2xl p-4">
                <span class="text-xs text-brand-muted block uppercase">Monthly Pass</span>
                <span id="rate-monthly" class="font-title text-2xl font-bold text-white">₱700</span>
              </div>
            </div>
            
            <p class="text-[11px] text-brand-muted text-center italic">* Note: Valid Student ID must be presented at the gym counter in Sto. Tomas for student discount rates.</p>
          </div>

        </div>
      `;
    }

    function renderAboutPage() {
      return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div class="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span class="text-brand-orange text-xs font-bold uppercase tracking-widest">Our Location & Facility</span>
            <h1 class="font-heading text-4xl sm:text-5xl text-white uppercase tracking-wider">ABOUT DONNY'S</h1>
            <p class="text-brand-muted text-sm">A dedicated community space built for fitness enthusiasts in San Vicente, Sto. Tomas, Pampanga.</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            
            <!-- Left Info Box -->
            <div class="space-y-6">
              <div class="bg-brand-card border border-brand-cardBorder rounded-2xl p-6 space-y-4">
                <h3 class="font-title text-xl font-bold text-white flex items-center gap-2">
                  <i class="fa-solid fa-map-pin text-brand-red"></i> Gym & Kitchen Address
                </h3>
                <p class="text-sm text-brand-muted leading-relaxed">
                  Apitong St. San Vicente, Sto. Tomas, Pampanga, Philippines.
                </p>
                <div class="pt-2 border-t border-brand-cardBorder text-xs text-brand-muted space-y-2">
                  <p class="flex items-center gap-2"><i class="fa-solid fa-phone text-brand-orange"></i> Phone: +63 (917) 555-DONNY</p>
                  <p class="flex items-center gap-2"><i class="fa-solid fa-envelope text-brand-orange"></i> Email: contact@donnyhealth.ph</p>
                </div>
              </div>

              <!-- Perks -->
              <div class="bg-brand-card border border-brand-cardBorder rounded-2xl p-6 space-y-4">
                <h3 class="font-title text-xl font-bold text-white">Why Train With Us?</h3>
                <ul class="space-y-3 text-xs text-brand-muted">
                  <li class="flex items-start gap-3">
                    <i class="fa-solid fa-circle-check text-brand-orange text-sm mt-0.5"></i>
                    <span><strong>Integrated High-Protein Kitchen:</strong> Order your post-workout meal directly after hitting your PRs.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fa-solid fa-circle-check text-brand-orange text-sm mt-0.5"></i>
                    <span><strong>Pro Equipment:</strong> Heavy dumbbells, squat racks, and specialized cable isolation setups.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fa-solid fa-circle-check text-brand-orange text-sm mt-0.5"></i>
                    <span><strong>Welcoming Atmosphere:</strong> Friendly coaches ready to assist beginners and seasoned lifters alike.</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Right Interactive Contact Form -->
            <div class="bg-brand-card border border-brand-cardBorder rounded-3xl p-8 space-y-6">
              <div>
                <h3 class="font-title text-xl font-bold text-white">Send Us A Message</h3>
                <p class="text-xs text-brand-muted">Inquiries about catering, meal plans, or gym visits.</p>
              </div>

              <form onsubmit="handleContactSubmit(event)" class="space-y-4">
                <div>
                  <label class="block text-xs font-semibold text-brand-muted uppercase mb-1">Your Name</label>
                  <input type="text" required placeholder="Juan Dela Cruz" class="w-full bg-brand-black border border-brand-cardBorder rounded-xl p-3 text-sm text-white focus:outline-none focus:border-brand-red">
                </div>
                <div>
                  <label class="block text-xs font-semibold text-brand-muted uppercase mb-1">Email or Phone</label>
                  <input type="text" required placeholder="juan@gmail.com / 0917..." class="w-full bg-brand-black border border-brand-cardBorder rounded-xl p-3 text-sm text-white focus:outline-none focus:border-brand-red">
                </div>
                <div>
                  <label class="block text-xs font-semibold text-brand-muted uppercase mb-1">Message</label>
                  <textarea rows="4" required placeholder="Ask us anything about our meals, memberships, or personal training..." class="w-full bg-brand-black border border-brand-cardBorder rounded-xl p-3 text-sm text-white focus:outline-none focus:border-brand-red"></textarea>
                </div>
                <button type="submit" class="w-full py-3.5 rounded-xl font-bold text-white bg-brand-red hover:bg-brand-redHover shadow-lg transition-all">
                  Send Feedback
                </button>
              </form>
            </div>

          </div>

        </div>
      `;
    }

    // --- INTERACTIVE CALCULATOR LOGIC ---
    function updateRateCalc(type) {
      document.querySelectorAll('.calc-btn').forEach(btn => {
        btn.classList.remove('bg-brand-red', 'text-white');
        btn.classList.add('text-brand-muted');
      });

      const activeBtn = document.getElementById(`calc-${type}`);
      if(activeBtn) {
        activeBtn.classList.remove('text-brand-muted');
        activeBtn.classList.add('bg-brand-red', 'text-white');
      }

      const rates = {
        student: { daily: "₱100", weekly: "₱300", monthly: "₱700" },
        member: { daily: "₱100", weekly: "₱300", monthly: "₱800" },
        nonmember: { daily: "₱100", weekly: "₱350", monthly: "₱1,000" }
      };

      document.getElementById('rate-daily').innerText = rates[type].daily;
      document.getElementById('rate-weekly').innerText = rates[type].weekly;
      document.getElementById('rate-monthly').innerText = rates[type].monthly;
    }

    // --- CART LOGIC & DRAWER CONTROLS ---
    function toggleCartDrawer() {
      const drawer = document.getElementById('cart-drawer');
      const backdrop = document.getElementById('cart-drawer-backdrop');
      
      if(drawer.classList.contains('translate-x-full')) {
        // Open
        backdrop.classList.remove('hidden');
        setTimeout(() => backdrop.classList.remove('opacity-0'), 10);
        drawer.classList.remove('translate-x-full');
      } else {
        // Close
        drawer.classList.add('translate-x-full');
        backdrop.classList.add('opacity-0');
        setTimeout(() => backdrop.classList.add('hidden'), 300);
      }
    }

    function addToCart(itemId) {
      const item = menuItems.find(i => i.id === itemId);
      if(!item) return;

      const existingIndex = cart.findIndex(c => c.id === itemId);
      if(existingIndex > -1) {
        cart[existingIndex].qty += 1;
      } else {
        cart.push({ ...item, qty: 1 });
      }

      updateCartUI();
      showToast(`Added ${item.name} to cart!`);
    }

    function updateCartQty(itemId, delta) {
      const index = cart.findIndex(c => c.id === itemId);
      if(index > -1) {
        cart[index].qty += delta;
        if(cart[index].qty <= 0) {
          cart.splice(index, 1);
        }
      }
      updateCartUI();
    }

    function updateCartUI() {
      const container = document.getElementById('cart-items-container');
      const badge = document.getElementById('cart-badge-count');
      const checkoutBtn = document.getElementById('checkout-btn');

      const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
      
      // Update badge
      if(totalItems > 0) {
        badge.innerText = totalItems;
        badge.classList.remove('scale-0');
        checkoutBtn.removeAttribute('disabled');
      } else {
        badge.classList.add('scale-0');
        checkoutBtn.setAttribute('disabled', 'true');
      }

      // Calculate totals
      let totalPrice = 0;
      let totalProtein = 0;
      let totalCalories = 0;

      if(cart.length === 0) {
        container.innerHTML = `
          <div class="text-center py-12 space-y-3">
            <i class="fa-solid fa-basket-shopping text-4xl text-brand-muted/40"></i>
            <p class="text-sm text-brand-muted">Your order cart is empty.</p>
            <button onclick="toggleCartDrawer(); navigateTo('menu')" class="px-4 py-2 rounded-xl bg-brand-black border border-brand-cardBorder text-xs text-white">Browse Kitchen</button>
          </div>
        `;
      } else {
        container.innerHTML = cart.map(item => {
          const itemTotal = item.price * item.qty;
          totalPrice += itemTotal;
          totalProtein += item.protein * item.qty;
          totalCalories += item.calories * item.qty;

          return `
            <div class="bg-brand-black/60 border border-brand-cardBorder rounded-xl p-3 flex justify-between items-center gap-3">
              <div class="flex-grow">
                <h4 class="text-xs font-bold text-white">${item.name}</h4>
                <div class="text-[11px] text-brand-muted mt-0.5">
                  ₱${item.price.toFixed(2)} &bull; <span class="text-brand-orange font-semibold">${item.protein * item.qty}g Protein</span>
                </div>
              </div>

              <div class="flex items-center gap-2 bg-brand-card border border-brand-cardBorder rounded-lg px-2 py-1">
                <button onclick="updateCartQty('${item.id}', -1)" class="text-xs text-brand-muted hover:text-white px-1">-</button>
                <span class="text-xs font-bold text-white px-1">${item.qty}</span>
                <button onclick="updateCartQty('${item.id}', 1)" class="text-xs text-brand-muted hover:text-white px-1">+</button>
              </div>
            </div>
          `;
        }).join('');
      }

      document.getElementById('cart-subtotal').innerText = `₱${totalPrice.toFixed(2)}`;
      document.getElementById('cart-macro-protein').innerText = `${totalProtein}g`;
      document.getElementById('cart-macro-calories').innerText = `${totalCalories} kcal`;
      document.getElementById('checkout-total-amount').innerText = `₱${totalPrice.toFixed(2)}`;
    }

    // --- MODAL CONTROLS ---
    function openCheckoutModal() {
      toggleCartDrawer();
      document.getElementById('checkout-modal').classList.remove('hidden');
    }

    function closeCheckoutModal() {
      document.getElementById('checkout-modal').classList.add('hidden');
    }

    function handleCheckoutSubmit(e) {
      e.preventDefault();
      closeCheckoutModal();
      cart = [];
      updateCartUI();
      showToast("Order placed successfully! We'll prepare your high-protein meal.");
    }

    function openJoinModal(planName = null) {
      if(planName) {
        document.getElementById('modal-plan-select').value = planName;
      }
      document.getElementById('join-modal').classList.remove('hidden');
    }

    function closeJoinModal() {
      document.getElementById('join-modal').classList.add('hidden');
    }

    function handleJoinSubmit(e) {
      e.preventDefault();
      closeJoinModal();
      showToast("Welcome to Donny's Gym! Registration details sent.");
    }

    function handleContactSubmit(e) {
      e.preventDefault();
      e.target.reset();
      showToast("Thank you for reaching out! We will reply shortly.");
    }

    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }

    // --- TOAST NOTIFICATIONS ---
    function showToast(message) {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = 'bg-brand-card border border-brand-red text-white text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 transform transition-all duration-300 translate-y-2 opacity-0 pointer-events-auto';
      toast.innerHTML = `<i class="fa-solid fa-circle-check text-brand-orange"></i> <span>${message}</span>`;
      
      container.appendChild(toast);
      
      setTimeout(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
      }, 10);

      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }

    // --- INITIALIZATION ---
    window.onload = function() {
      navigateTo('home');
    };
