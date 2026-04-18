'use client'


import React, { forwardRef, useId } from 'react'
interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = '', label, error, id, rows = 4, ...props }, ref) => {
    const textareaId = id || useId()
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            {label} {props.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          className={`
            block w-full rounded-md border-gray-300 shadow-sm 
            focus:border-biotech-green focus:ring-biotech-green 
            disabled:bg-gray-50 disabled:text-gray-500
            transition-colors duration-200
            py-3 px-4 border
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    )
  },
)
TextArea.displayName = 'TextArea'
