const { createApp, ref, computed, nextTick } = Vue;

createApp({
    setup() {
        const itinerary = ref(itineraryData);
        const currentDayId = ref(null); // null means overview
        const mainContent = ref(null);
        const showPackingList = ref(false);
        const checkedItems = ref([]);

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
            switchDay,
            getIconForType,
            getSectionColor
        };
    }
}).mount('#app');
