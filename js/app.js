const { createApp, ref, computed, nextTick, watch, onMounted } = Vue;

createApp({
    setup() {
        const itinerary = ref(itineraryData);
        const currentDayId = ref(null); // null means overview
        const mainContent = ref(null);
        const showPackingList = ref(false);
        const checkedItems = ref([]);

        // New Features State
        const showPhrasebook = ref(false);
        const showEmergency = ref(false);
        const showExpenseTracker = ref(false);
        const showShoppingList = ref(false);
        const showWallet = ref(false);

        const expenses = ref([]);
        const shoppingList = ref([]);

        // Expense Tracker Logic
        const newExpense = ref({ item: '', cost: '', category: '餐飲' });
        const expenseCategories = ['餐飲', '交通', '購物', '門票', '住宿', '其他'];

        const addExpense = () => {
            if (!newExpense.value.item || !newExpense.value.cost) return;
            expenses.value.push({
                id: Date.now(),
                item: newExpense.value.item,
                cost: parseInt(newExpense.value.cost),
                category: newExpense.value.category,
                date: new Date().toLocaleDateString()
            });
            newExpense.value = { item: '', cost: '', category: '餐飲' };
        };

        const removeExpense = (id) => {
            expenses.value = expenses.value.filter(e => e.id !== id);
        };

        const totalExpense = computed(() => {
            return expenses.value.reduce((sum, item) => sum + item.cost, 0);
        });

        // Shopping List Logic
        const newShoppingItem = ref('');

        const addShoppingItem = () => {
            if (!newShoppingItem.value) return;
            shoppingList.value.push({
                id: Date.now(),
                name: newShoppingItem.value,
                checked: false
            });
            newShoppingItem.value = '';
        };

        const removeShoppingItem = (id) => {
            shoppingList.value = shoppingList.value.filter(item => item.id !== id);
        };

        // Persistence
        onMounted(() => {
            const savedExpenses = localStorage.getItem('kyoto_expenses');
            if (savedExpenses) expenses.value = JSON.parse(savedExpenses);

            const savedShopping = localStorage.getItem('kyoto_shopping');
            if (savedShopping) shoppingList.value = JSON.parse(savedShopping);

            const savedCheckedItems = localStorage.getItem('kyoto_packing_checked');
            if (savedCheckedItems) checkedItems.value = JSON.parse(savedCheckedItems);
        });

        watch(expenses, (newVal) => {
            localStorage.setItem('kyoto_expenses', JSON.stringify(newVal));
        }, { deep: true });

        watch(shoppingList, (newVal) => {
            localStorage.setItem('kyoto_shopping', JSON.stringify(newVal));
        }, { deep: true });

        watch(checkedItems, (newVal) => {
            localStorage.setItem('kyoto_packing_checked', JSON.stringify(newVal));
        }, { deep: true });

        const currentDay = computed(() => {
            if (!currentDayId.value) return null;
            return itinerary.value.days.find(d => d.id === currentDayId.value);
        });

        const switchDay = (id) => {
            currentDayId.value = id;
            // Scroll to top smoothly
            nextTick(() => {
                if (mainContent.value) {
                    mainContent.value.scrollTop = 0;
                }
            });
        };

        const getIconForType = (type) => {
            switch (type) {
                case 'summary': return 'fa-solid fa-list-check';
                case 'transport': return 'fa-solid fa-train-subway';
                case 'sightseeing': return 'fa-solid fa-camera-retro';
                case 'meals': return 'fa-solid fa-utensils';
                case 'list': return 'fa-solid fa-clipboard-check';
                default: return 'fa-solid fa-circle-info';
            }
        };

        const getSectionColor = (type) => {
            switch (type) {
                case 'summary': return 'bg-indigo-500';
                case 'transport': return 'bg-blue-500';
                case 'sightseeing': return 'bg-pink-500';
                case 'meals': return 'bg-lime-500';
                case 'list': return 'bg-green-500';
                default: return 'bg-gray-500';
            }
        };

        return {
            itinerary,
            currentDayId,
            currentDay,
            mainContent,
            showPackingList,
            checkedItems,
            // New Features Exports
            showPhrasebook,
            showEmergency,
            showExpenseTracker,
            showShoppingList,
            showWallet,
            expenses,
            shoppingList,
            newExpense,
            expenseCategories,
            addExpense,
            removeExpense,
            totalExpense,
            newShoppingItem,
            addShoppingItem,
            removeShoppingItem,
            switchDay,
            getIconForType,
            getSectionColor
        };
    }
}).mount('#app');
