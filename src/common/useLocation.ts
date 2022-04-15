import { MutationsEnum } from '@/store/interfaces';
import { onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';

export const useLocation = () => {
  const { commit } = useStore();

  const listener = () => {
    commit(
      MutationsEnum.SET_LOCATION_HASH,
      window.location.hash.slice(1) || '/'
    );
  };
  window.addEventListener('hashchange', listener);
  onUnmounted(() => {
    window.removeEventListener('hashchange', listener);
  });
};
