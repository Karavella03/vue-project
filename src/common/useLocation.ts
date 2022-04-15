import { MutationsEnum } from '@/store/interfaces';
import { onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';

export const useLocation = () => {
  const { commit } = useStore();

  const commitHash = () => {
    commit(
      MutationsEnum.SET_LOCATION_HASH,
      window.location.hash.slice(1) || '/'
    );
  };
  commitHash();
  window.addEventListener('hashchange', commitHash);
  onUnmounted(() => {
    window.removeEventListener('hashchange', commitHash);
  });
};
