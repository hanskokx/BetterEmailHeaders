                //Quick Reply bar
                {kind: "HFlexBox", name: "QuickReplyBar", style: "position: absolute; bottom: 0;", components: [
                    {className: "dotted-bottom", style: "height: 1px;"},
                    {name: "quickreply", kind: "Input", hint: "Quick reply...", style: "background-color: white; height: 48px;", onchange: "inputChange", components: [
                        {kind: "HFlexBox", components: [
                            {kind: "Button", name: "sendButton", style: "position: relative; top: -8px; background-color: white; border: 0;", components: [
                                {className: "header-send-icon", onclick: "sendClick"}
                            ]}
                        ]}
                    ]}
                ]},