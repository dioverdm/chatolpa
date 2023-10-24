import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";

export const Modal = ({ title, description, isOpen, onClose, children }) => {
    const onChange = (open) => {
        console.log("inside onchange: ", open);
        if (!open) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div>{children}</div>
            </DialogContent>
        </Dialog>
    );
};
