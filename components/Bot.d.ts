type messageType = 'apiMessage' | 'userMessage' | 'usermessagewaiting';
export type MessageType = {
    message: string;
    type: messageType;
};
export type BotProps = {
    chatflowid: string;
    apiHost?: string;
};
export declare const Bot: (props: BotProps) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=Bot.d.ts.map