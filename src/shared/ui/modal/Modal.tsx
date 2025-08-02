import { Dialog } from 'radix-ui'

interface ModalProps {
    trigger: React.ReactNode
    children: React.ReactNode
    title?: string
}
export function Modal({ trigger, children, title }: ModalProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                <Dialog.Content className="bg-bg-background fixed top-1/2 left-1/2 z-50 flex w-full max-w-md -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-lg p-6 shadow-lg">
                    <Dialog.Title className="text-text-primary text-lg font-semibold">{title}</Dialog.Title>
                    {children}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
