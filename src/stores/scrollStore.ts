type Listener = () => void;

export function createScrollStore<T extends string>() {
  const refs = new Map<T, HTMLElement | null>();
  const listeners = new Set<Listener>();

  function registerRef(key: T): React.RefCallback<HTMLElement> {
    return (el) => {
      refs.set(key, el);
      listeners.forEach((fn) => fn());
    };
  }

  function scrollTo(key: T, behavior: ScrollBehavior = "smooth") {
    const el = refs.get(key);
    if (el) {
      el.scrollIntoView({ behavior });
      window.location.hash = key;
    }
  }

  function getSnapshot(): Map<T, HTMLElement | null> {
    return refs;
  }
  // 這是 SSR 中需要提供的 getServerSnapshot
  function getServerSnapshot(): Map<T, HTMLElement | null> {
    return refs;
  }

  function subscribe(listener: Listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  return {
    registerRef,
    scrollTo,
    subscribe,
    getSnapshot,
    getServerSnapshot,
  };
}
