import React from "react";

const RichTextRenderer = ({text}) => {
    const renderRichText = () => {
        return text.map((element, index) => {
            switch (element.type) {
                case 'paragraph':
                    return (
                        <p key={index}>
                            {element.children &&
                                element.children.map((child, childIndex) => (
                                    <React.Fragment key={childIndex}>
                                        {child.bold ? (
                                            <strong>{child.text}</strong>
                                        ) : (
                                            child.text || ' '
                                        )}
                                    </React.Fragment>
                                ))}
                        </p>
                    );

                case 'heading':
                    return (
                        <h3 key={index}>
                            {element.children &&
                                element.children.map((child, childIndex) => (
                                    <React.Fragment key={childIndex}>
                                        {child.bold ? (
                                            <strong>{child.text}</strong>
                                        ) : (
                                            child.text || ' '
                                        )}
                                    </React.Fragment>
                                ))}
                        </h3>
                    );

                // Add other cases for different rich text elements if needed

                default:
                    return null;
            }
        });
    };

    return <div>{renderRichText()}</div>;
};

export default RichTextRenderer;