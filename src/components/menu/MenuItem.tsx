import React from 'react';
import Badge from '../Badge';
import { MenuItem as MenuItemType } from '@/data/menu';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <div className="flex gap-4 p-4 hover:bg-neutral-50 rounded-lg transition-colors">
      {/* Image */}
      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold text-neutral-900">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-primary-600 whitespace-nowrap">
            ${item.price}
          </span>
        </div>
        <p className="text-sm text-neutral-600 mb-2 leading-relaxed">
          {item.description}
        </p>
        {item.badge && (
          <Badge
            variant="soft"
            color={
              item.badge === 'Chef\'s Pick' ? 'warning' :
              item.badge === 'Premium' ? 'primary' :
              'success'
            }
            size="sm"
          >
            {item.badge}
          </Badge>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
