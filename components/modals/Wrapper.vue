<script setup lang="ts">
	import { useModalStore } from "~/store/useModalStore";

	const modalStore = useModalStore();
</script>

<template>
	<Teleport to="#modals">
		<ModalsАpplication
			v-if="modalStore.activeModal === 'application'"
			v-bind="modalStore.modalProps"
			@close="modalStore.close()"
		/>
	</Teleport>
</template>
